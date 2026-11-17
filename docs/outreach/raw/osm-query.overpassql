// Worldwide skydiving dropzones in OpenStreetMap. Run on overpass-api.de (about 10 minutes), then:
// python3 -I osm2csv.py result.json > osm.csv   (then add country with an is_in lookup, see sources.md)
[out:json][timeout:900];
(
  nwr["sport"~"skydiv|parachut",i];
  nwr["aeroway"="aerodrome"]["parachuting"];
  nwr["club"="parachuting"];
  nwr["leisure"]["name"~"skydiv|sky dive|fallschirm|parachut|paraca|spadochron|parašut|парашют|скайдайв|dropzone|fallskärm|faldskærm|fallskjerm|laskuvarjo|paraquedis",i];
  nwr["club"]["name"~"skydiv|sky dive|fallschirm|parachut|paraca|spadochron|parašut|парашют|скайдайв|dropzone|fallskärm|faldskærm|fallskjerm|laskuvarjo|paraquedis",i];
  nwr["aeroway"]["name"~"skydiv|sky dive|fallschirm|parachut|paraca|spadochron|parašut|парашют|скайдайв|dropzone|fallskärm|faldskærm|fallskjerm|laskuvarjo|paraquedis",i];
  nwr["amenity"]["name"~"skydiv|sky dive|fallschirm|parachut|paraca|spadochron|parašut|парашют|скайдайв|dropzone|fallskärm|faldskærm|fallskjerm|laskuvarjo|paraquedis",i];
  nwr["tourism"]["name"~"skydiv|sky dive|fallschirm|parachut|paraca|spadochron|parašut|парашют|скайдайв|dropzone|fallskärm|faldskærm|fallskjerm|laskuvarjo|paraquedis",i];
  nwr["shop"]["name"~"skydiv|sky dive|fallschirm|parachut|paraca|spadochron|parašut|парашют|скайдайв|dropzone|fallskärm|faldskærm|fallskjerm|laskuvarjo|paraquedis",i];
  nwr["office"]["name"~"skydiv|sky dive|fallschirm|parachut|paraca|spadochron|parašut|парашют|скайдайв|dropzone|fallskärm|faldskærm|fallskjerm|laskuvarjo|paraquedis",i];
);
out center tags;
