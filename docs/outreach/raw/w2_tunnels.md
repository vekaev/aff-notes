# w2_tunnels: indoor skydiving wind tunnels worldwide

Built 2026-11-16 by one coordinator plus 5 regional collectors. Part files live in `parts_w2_tunnels/`
(us, eu_west, eu_central_south_north, eu_east_cis, row) and are merged into `w2_tunnels.csv`. The merge drops
rows whose name and website are the same. No one was contacted and no forms were submitted.

## Sources
- **Master list:** indoorskydiving.world. Its world directory and country pages list 348 entries, including
  closed and planned tunnels; about 240 of them are open to the public. Most tunnels' pages there have a
  CONTACTS block with phone, email and website. This is the single source that holds most of the list.
- **Cross-check:** a 2023-era snapshot of the tunnelflight (IBA) tunnel table with 170 rows, at
  tunnelflightdocs.pages.dev/overview/tunnels. The live tunnelflight.com/tunnels list loads through
  JavaScript and could not be read.
- **Emails:** each tunnel's own contact or imprint page. iFLY USA uses its per-location pages on
  iflyworld.com. iFLY corporate publishes pr@ and partnerships@ addresses.
- **Associations and media:** IBA (info@tunnelflight.com), Indoor Skydiving Source, IndoorSkydiving.World and
  the FAI ISC.

## Completeness
- About 245 tunnel rows against about 240 open public tunnels in the directory. The rows include some marked
  closed, possibly closed or unverified, which are kept and flagged in notes. The directory's own
  open-to-public counts were 122 for Europe and 51 for the US.
- **Strong coverage:** US, France, Poland, Russia, Nordics, Iberia, Germany and Australia.
- **Gaps:** the shared web-search quota ran out partway through, so these were never searched:
  - Turkey, the Caucasus, Central Asia, the Baltics other than Latvia, and Serbia
  - Russian cities beyond the directory (Kazan, Sochi, Krasnodar and others)
  - Iran (Kish, Saba) and Egypt
  - the local-language sweep for tunnels missing from the list in DE/ES/IT/Nordic languages
- **Rows with no or few contacts:** most Chinese tunnels, iFLY Mexico City, Rio, São Paulo, Doha and
  Ras al Khaimah, Superfly Riyadh, AirRider KL, UFLY and Freefall Xtreme.
- **Not found:** no IBA public coach or instructor directory exists. Tunnel coaches are certified through
  tunnelflight, but their profiles need a login, so none were collected. Coaches and lofts are a separate
  scope (parts_w2_coaches_lofts).

## Could not reach
- **Parked or for-sale domains:** FULLFLY, Twist'Air, On'Air Tallard, Skywind Miass, FlyRoom Tyumen,
  flytornado.com, iflymexico.com and ufly.com.tw.
- **Sites that load only through JavaScript:** aerodium.lv, .ua, .bg and .si, plus krutitcy.com.
- **Bot checks on directory pages:** AERODIUM Buenos Aires, Dalian and FlyStation Yokohama are left out.
- **iFLY USA:** publishes no per-tunnel email (central form only), so most US rows have a phone and the
  form only.

## Status changes found
- **Closed in 2026:** iFLY Chicago Lincoln Park, Fort Worth, San Diego and El Paso.
- **Renamed or moved:** Modern Activity Center became FlyTribe Oslo; AIRFLY64 became Airfly Aquitaine;
  Airfly Nantes became AirFly44 (Plessé); Air Vertical moved to Merville.
- **New:** Indoor Skydiving Leipzig opened at the end of 2025.

## AFF-prep programs seen
- **Named AFF prep courses:** FlyStation Munich ("AFF-Training") and Flow Moscow ("Подготовка к AFF").
- **Skydiver programs:** iFLY Canada, Brazil and Australia, FlyStation Japan and AltitudeX all mention
  skydiver or AFF programs.
- **Tunnels at drop zones:** Windoor Realfly Empuriabrava and Atticafly.

## Summary
- Rows written: 249 (245 tunnels plus 4 associations or media).
- Rows with email: 138.
- Completeness: about 95% of open public tunnels have a row; about 55% have an email.
- Best source: the indoorskydiving.world tunnel pages (CONTACTS block).
- Main gaps: Turkey, the Caucasus, Central Asia, China, and iFLY USA's lack of per-tunnel email.
