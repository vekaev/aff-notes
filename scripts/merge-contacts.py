"""Merge docs/outreach/raw/*.csv into docs/outreach/contacts.csv (dedupe by email, then website domain, then name)."""
import csv, glob, re, os, sys
from urllib.parse import urlparse
COLS = "name,type,country,region,city,website,email,phone,contact_form,instagram,youtube,facebook,other_links,person,role,languages,audience_size,source_url,confidence,notes".split(",")
root = os.path.join(os.path.dirname(__file__), "..", "docs", "outreach")
EMAIL = re.compile(r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}")
def dom(u):
    if not u: return ""
    if "://" not in u: u = "http://" + u
    d = urlparse(u).netloc.lower()
    return d[4:] if d.startswith("www.") else d
SOCIAL = ("facebook.com","instagram.com","youtube.com","tiktok.com","reddit.com","discord","linktr.ee","x.com","twitter.com")
ALIASES = {"us":"United States","usa":"United States","u.s.":"United States","united states of america":"United States",
  "uk":"United Kingdom","gb":"United Kingdom","great britain":"United Kingdom","england":"United Kingdom","scotland":"United Kingdom","wales":"United Kingdom","northern ireland":"United Kingdom",
  "uae":"United Arab Emirates","de":"Germany","deutschland":"Germany","fr":"France","es":"Spain","españa":"Spain","it":"Italy","italia":"Italy","br":"Brazil","brasil":"Brazil",
  "au":"Australia","nz":"New Zealand","ca":"Canada","mx":"Mexico","méxico":"Mexico","ru":"Russia","russian federation":"Russia","ua":"Ukraine","czech republic":"Czechia","türkiye":"Turkey"}
def country(c): return ALIASES.get(c.strip().lower(), c.strip())
rows, seen, stats = [], {}, {}
for f in sorted(glob.glob(os.path.join(root, "raw", "*.csv"))):
    n = 0
    with open(f, newline="", encoding="utf-8-sig") as fh:
        for r in csv.DictReader(fh):
            r = {c: (r.get(c) or "").strip() for c in COLS}
            r["country"] = country(r["country"])
            if not r["name"]: continue
            emails = EMAIL.findall(r["email"])
            r["email"] = "; ".join(dict.fromkeys(e.lower() for e in emails))
            d = dom(r["website"])
            keys = [("e", e) for e in r["email"].split("; ") if e]
            if d and not any(s in d for s in SOCIAL): keys.append(("d", d))
            keys.append(("n", re.sub(r"\W+", "", r["name"].lower()) + "|" + r["country"].lower()))
            hit = next((seen[k] for k in keys if k in seen), None)
            if hit is not None:
                old = rows[hit]
                for c in COLS:
                    if not old[c] and r[c]: old[c] = r[c]
                old["source_url"] = old["source_url"] or r["source_url"]
            else:
                hit = len(rows); rows.append(r); n += 1
            for k in keys: seen[k] = hit
    stats[os.path.basename(f)] = n
rows.sort(key=lambda r: (r["type"], r["country"], r["region"], r["name"].lower()))
with open(os.path.join(root, "contacts.csv"), "w", newline="", encoding="utf-8") as fh:
    w = csv.DictWriter(fh, COLS); w.writeheader(); w.writerows(rows)
by = lambda k: sorted({r[k] for r in rows})
print("rows", len(rows), "with email", sum(1 for r in rows if r["email"]), "form only", sum(1 for r in rows if not r["email"] and r["contact_form"]))
for k, v in stats.items(): print(f"  {k}: {v} new")
from collections import Counter
print("by type", Counter(r["type"] for r in rows).most_common())
print("top countries", Counter(r["country"] for r in rows).most_common(15))
