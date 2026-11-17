# w2_latam: research notes

Scope: Brazil (CBPq), Argentina, Chile, Uruguay, Paraguay, Bolivia, Peru, Ecuador, Colombia, Venezuela, Mexico,
Guatemala, Costa Rica, Panama, Dominican Rep., Puerto Rico, Cuba. Nobody was contacted and no forms were sent. The
CBPq directory filters were read with the page's own state/federation selector, which is a read-only search.

## Sources
- **CBPq** (Brazil, the best single source): `cbpq.org.br/areas-de-salto/` (41 áreas de salto across 27 states,
  each with phone, email and AFF/ASL/Tandem flags), `/filiados/clubes/` (80 clubs/schools across 21 federations,
  each with president, RTA, email and phone) and `/filiados/federacoes/` (20 state federations). Everything was pulled.
  The data is old in places: there are 8-digit mobile numbers, hotmail/yahoo addresses and dead domains. Rows from
  it are marked medium.
- **PARAFECH** (Chile): `paracaidismo.cl/club-federados/` lists 8 federated clubs with email and phone. Two entries
  have a mismatch between the shown email and its link (noted in the rows).
- **FAP** (Argentina): `paracaidismo.org.ar`. Its ANAC list of approved schools (PDF) returns 404, so the
  Argentine schools came from search results and the schools' own sites.
- **Flight-1 drop zone list** (`flight-1.com/dropzones`): current phones for Mexico, Colombia, the Dominican
  Republic, Panama, Puerto Rico, Venezuela and Brazil.
- **skydiveworld.com South America page**: very old. It was used only for names in thin countries (Bolivia,
  Paraguay, Guatemala, Cuba, some of Argentina). Its old personal emails were not copied.
- **indoorskydiving.world**: the wind tunnel directory.
- Each school's own website was checked with a curl probe (home page plus contact page) for email, Instagram,
  YouTube, Facebook and WhatsApp. Rows confirmed that way are marked high.

## Completeness
- Brazil: about 95% of what CBPq publishes (all 41 areas, 80 clubs and 20 federations, minus duplicates and one
  test entry), plus 12 Boituva schools. CBPq shows **0 clubs under the Federação Paulista**, even though Boituva has
  14+ schools. I added SkyRadical, Skydive Boituva, São Paulo Paraquedismo, WOW, Sky Company, Queda Livre, Salto
  Duplo, Céu Azul, SkyJump, Paraquedismo Boituva, Skydive4fun, Fly Now and FlyOn. Still missing from a press list:
  GoFly, BlueSky, SkyFlow, SkyVibe (their guessed domains don't resolve).
- Chile: good (PARAFECH plus SkyDiveCosta, Skydive Andes and others).
- Mexico: good for the main DZs (Tequesquitengo, Cuautla, Puebla, Nuevo León, Playa del Carmen). Weaker for small
  operators and Federación Mexicana / ANPAD, which I didn't find.
- Argentina: about 70%. The main schools are in, but some interior ones are old listings only.
- Weak: Colombia (Xielo/EPICO sites don't load), Paraguay, Bolivia, Guatemala, Cuba, Dominican Rep. (phone only).
- Not covered: creators, podcasts and LatAm gear makers. The shared WebSearch budget (200 per turn) ran out partway
  through, so the last searches (Dominican Rep., Guatemala, creators) weren't run.

## Could not reach
Dead or unresolved domains (checked): tribodoceu, flycuritiba, skydivealbatroz, skydiveresende, avisrarabrasil,
bahiaparaquedismo, skydivepucon.cl, skydivevina.cl, xielo.co, panamafreefall, paracaidismo.com.py and others. These
rows keep the directory email at medium or low. condorxtreme.com sits behind a bot check, and paracaidismomexico.com
returns 403.

## Summary
- Rows written: 215
- Rows with email: 151
- Confidence: 53 high, 123 medium, 39 low
- Completeness: Brazil about 95% of the CBPq lists; the rest of LatAm about 60–70% of active DZs
- Best source: the CBPq directory (cbpq.org.br/areas-de-salto, /filiados/clubes, /filiados/federacoes)
