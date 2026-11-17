"""Convert Overpass JSON results to the outreach CSV format.

Usage: python3 -I osm2csv.py out.json [out2.json ...] > osm.csv
Keeps outdoor dropzones; drops indoor tunnels, memorials, streets and obvious non-dropzone hits.
"""
import csv, json, re, sys

COLS = "name,type,country,region,city,website,email,phone,contact_form,instagram,youtube,facebook,other_links,person,role,languages,audience_size,source_url,confidence,notes".split(",")

DROP_WORDS = re.compile(r"memorial|monument|denkmal|museum|tower|вышк|indoor|tunnel|windkanal|ifly|bodyflight|paragliding|parapente|parasail|landing (zone|site) for paraglid", re.I)
NAME_RX = re.compile(r"skydiv|sky dive|fallschirm|parachut|paraca|spadochron|parašut|парашют|скайдайв|dropzone|fallskärm|faldskærm|fallskjerm|laskuvarjo|paraquedis", re.I)
SPORT_RX = re.compile(r"skydiv|parachut", re.I)


def first(t, *keys):
    for k in keys:
        v = t.get(k)
        if v:
            return v.strip()
    return ""


STRICT_NAME = re.compile(r"skydiv|sky ?dive|fallschirm(?!j)|parachutis|parachute (club|centre|center|school|association|training)|paracaidis|paracadutis|paraquedis|spadochron|parašut|parasut|парашют|скайдайв|fallskärm|faldskærm|fallskjerm|laskuvarjo|ejtőernyő|padák", re.I)
BAD_NAME = re.compile(r"memorial|monument|denkmal|museu|museo|museum|tower|вышк|indoor|tunnel|windkanal|ifly|bodyflight|paraglid|parapente|yamaç|parasail|jäger|regiment|brigad|bataillon|battalion|полк|бригад|associazione nazionale paracadutisti|anpd|veteran|stabilimento|bar\b|café|cafe", re.I)
BAD_AMENITY = {"restaurant","cafe","bar","pub","fast_food","school","prep_school","music_school","fuel","police","hospital","clinic","pharmacy","bank","townhall","bus_station","fire_station","drinking_water","ferry_terminal","ice_cream","cinema","parking","place_of_worship","bicycle_pooling","community_centre","kindergarten","post_office","toilets","bench","shelter","grave_yard"}
OK_SHOP = {"sports","outdoor","parachuting","free_flying","travel_agency","yes"}
BAD_LEISURE = {"park","beach_resort","playground","garden","picnic_table","fitness_centre","swimming_pool"}


def keep(t):
    name = t.get("name", "")
    sport = t.get("sport", "")
    if "indoor" in sport or t.get("leisure") == "indoor_skydiving" or "paraglid" in sport:
        return False
    if BAD_NAME.search(name) or t.get("historic") or t.get("memorial") or t.get("military"):
        return False
    if t.get("highway") or t.get("route") or t.get("railway") or t.get("place") or t.get("boundary"):
        return False
    if t.get("amenity") in BAD_AMENITY or t.get("leisure") in BAD_LEISURE:
        return False
    if "shop" in t and t["shop"] not in OK_SHOP:
        return False
    if SPORT_RX.search(sport) or t.get("parachuting") or t.get("club") == "parachuting":
        return True
    return bool(STRICT_NAME.search(name))


def _ll(r):
    m = re.search(r"lat,lon (-?[0-9.]+),(-?[0-9.]+)", r["notes"])
    return (float(m.group(1)), float(m.group(2))) if m else None


def _km(a, b):
    import math
    dy = (a[0] - b[0]) * 111
    dx = (a[1] - b[1]) * 111 * math.cos(math.radians(a[0]))
    return (dx * dx + dy * dy) ** 0.5


def _score(r):
    return sum(bool(r[k]) for k in ("website", "email", "phone", "city")) + (r["name"] != "(unnamed parachuting site)") * 2


def dedupe(rows):
    """Merge objects that are the same dropzone: within 3 km and same name, or unnamed / same website."""
    rows = sorted(rows, key=_score, reverse=True)
    kept = []
    for r in rows:
        ll = _ll(r)
        dup = None
        for k in kept:
            kl = _ll(k)
            if not ll or not kl or _km(ll, kl) > 3:
                continue
            same_name = r["name"].lower() == k["name"].lower()
            unnamed = r["name"] == "(unnamed parachuting site)"
            same_web = r["website"] and r["website"].rstrip("/").lower() == k["website"].rstrip("/").lower()
            if same_name or unnamed or same_web:
                dup = k
                break
        if dup is None:
            kept.append(r)
            continue
        for f in COLS:
            if not dup[f] and r[f]:
                dup[f] = r[f]
        dup["other_links"] = " ".join(x for x in (dup["other_links"], r["source_url"]) if x).strip()
    return kept


def main():
    seen = set()
    rows = []
    for path in sys.argv[1:]:
        for el in json.load(open(path, encoding="utf-8"))["elements"]:
            key = (el["type"], el["id"])
            if key in seen:
                continue
            seen.add(key)
            t = el.get("tags", {})
            if not keep(t):
                continue
            lat = el.get("lat") or el.get("center", {}).get("lat")
            lon = el.get("lon") or el.get("center", {}).get("lon")
            name = first(t, "name", "name:en", "operator") or "(unnamed parachuting site)"
            notes = [f"OSM {t.get('sport') and 'sport=' + t['sport'] or ''}".strip()]
            for k in ("leisure", "aeroway", "club", "shop", "amenity"):
                if k in t:
                    notes.append(f"{k}={t[k]}")
            if lat is not None:
                notes.append(f"lat,lon {lat:.5f},{lon:.5f}")
            rows.append({
                "name": name,
                "type": "dropzone",
                "country": first(t, "addr:country"),
                "region": first(t, "addr:state", "addr:province", "addr:region"),
                "city": first(t, "addr:city", "addr:town", "addr:village", "addr:place"),
                "website": first(t, "website", "contact:website", "url"),
                "email": first(t, "email", "contact:email"),
                "phone": first(t, "phone", "contact:phone", "contact:mobile"),
                "contact_form": "",
                "instagram": first(t, "contact:instagram", "instagram"),
                "youtube": first(t, "contact:youtube", "youtube"),
                "facebook": first(t, "contact:facebook", "facebook"),
                "other_links": first(t, "wikipedia", "wikidata"),
                "person": "",
                "role": "",
                "languages": "",
                "audience_size": "",
                "source_url": f"https://www.openstreetmap.org/{el['type']}/{el['id']}",
                "confidence": "low",
                "notes": "; ".join(n for n in notes if n),
            })
    rows = dedupe(rows)
    w = csv.DictWriter(sys.stdout, fieldnames=COLS, quoting=csv.QUOTE_MINIMAL, lineterminator="\n")
    w.writeheader()
    for r in sorted(rows, key=lambda r: (r["country"], r["name"].lower())):
        w.writerow(r)
    print(f"rows={len(rows)} with_email={sum(1 for r in rows if r['email'])} with_web={sum(1 for r in rows if r['website'])}", file=sys.stderr)


if __name__ == "__main__":
    main()
