---
name: Hamburg
short: HH
criteria:
  - title: Rechtsanspruch auf Open Data
    points: 5
    citations:
      - text: '§1 Abs. 2 HmbTG'
        link: https://www.landesrecht-hamburg.de/bsha/document/jlr-TranspGHAV2P1
    text: Kein Rechtsanspruch auf Open Data, aber Anspruch auf unverzüglichen Zugang zu allen amtlichen Informationen der auskunftspflichtigen Stellen.
  - title: Gesetzeslage
    points: 1
    citations:
      - text: 'HmbTG (2019 [2012])'
        link: https://www.landesrecht-hamburg.de/bsha/document/jlr-TranspGHAV2P3/part/X
    text: Transparenzgesetz mit Open-Data-Einsprengseln
  - title: Evaluation
    points: 0
  - title: Behördendefinition
    points: 3
    citations:
      - text: '§2 Abs. 3-4 HmbTG  '
        link: https://www.landesrecht-hamburg.de/bsha/document/jlr-TranspGHAV2P2
    text: Behörden der Freien und Hansestadt Hamburg
  - title: Anstalten, Körperschaften, Unternehmen
    points: 2
    citations:
      - text: '§2 Abs. 3-4 HmbTG  '
        link: https://www.landesrecht-hamburg.de/bsha/document/jlr-TranspGHAV2P2
    text: Körperschaften und Stiftungen die Daseinsvorsorge oder öffentliche Dienstleistungen anbieten, Unternehmen unter Kontrolle der Freien und Hansestadt Hamburg
  - title: Forschungsdaten
    points: 0
  - title: Ausnahmen
    points: 1
    citations:
      - text: '§5 HmbTG'
        link: https://www.landesrecht-hamburg.de/bsha/document/jlr-TranspGHAV2P5
    text: Ausnahmen bei Justiz und Steuerverwaltung, Landesamt für Verfassungsschutz, Rechnungshof, Rundfunkanstalten, Kassenärztliche Vereinigung, Hamburger Förder- und Investitionsbank
  - title: Pauschale Ausschlusskriterien
    points: 1
    citations:
      - text: '§4-9 HmbTG'
        link: https://www.landesrecht-hamburg.de/bsha/document/jlr-TranspGHApG1/part/X
    text: Personenbezogene Daten, öffentliche Belange, behördlicher Entscheidungsprozess, Gemeinwohl, Schutz geistigen Eigentums, Betriebs- und Geschäftsgeheimnisse, bestimmte Verträge
  - title: Datenkatalog
    points: 1
    citations:
      - text: '§3 HmbTG'
        link: https://www.landesrecht-hamburg.de/bsha/document/jlr-TranspGHAV2P3
    text: Aufzählung von auskunftspflichtigen Informationen
  - title: Rohdaten
    points: 0
  - title: Daten im Auftrag von Dritten
    points: 0
  - title: Offenheit
    points: 1
    citations:
      - text: '§10 Abs. 5, HmbTG'
        link: https://www.landesrecht-hamburg.de/bsha/document/jlr-TranspGHAV2P10
  - title: Maschinenlesbarkeit
    points: 1
    citations:
      - text: '§10 Abs. 1, HmbTG'
        link: https://www.landesrecht-hamburg.de/bsha/document/jlr-TranspGHAV2P10
  - title: Aktualität
    points: 1
    citations:
      - text: '§10 Abs. 8, HmbTG'
        link: https://www.landesrecht-hamburg.de/bsha/document/jlr-TranspGHAV2P10
  - title: Dauerhaftigkeit
    points: 0
  - title: Lizenz
    points: 1
    citations:
      - text: '§10 Abs. 3, HODaG'
        link: https://www.landesrecht-hamburg.de/bsha/document/jlr-TranspGHAV2P10
    text: Keine Lizenz genannt aber freie Nutzung
  - title: Schnittstellen
    points: 0
  - title: Diskriminierungsfreiheit
    points: 0
  - title: Kostenfreiheit
    points: 1
    citations:
      - text: '§10 Abs. 4, HODaG'
        link: https://www.landesrecht-hamburg.de/bsha/document/jlr-TranspGHAV2P10
  - title: Portal für Open Data
    points: 0
    citations:
      - text: 'Transparenzportal Hamburg'
        link: https://transparenz.hamburg.de/
  - title: Portal-Schnittstellen
    points: 0
  - title: API mit Dokumentation
    points: 0
  - title: SPARQL-Abfragen
    points: 0
  - title: Aktualität der Daten
    points: 2
    citations:
      - text: 'mehr als 25% des Datenbestands aktualisiert'
        link: https://www.govdata.de/web/guest/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AtransparenzportalHamburg%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202023)%20.%0A%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table
    text: Für den Vergleichszeitraum 2023 wurden 26,39% der Datensätze auf das Gesamtdatenvorkommen bezogen neu erstellt oder aktualisiert
  - title: Linked Data
    points: 0
    citations:
      - text: 'keine Linked Data'
        link: https://www.govdata.de/web/guest/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithLD)%20AS%20%3FdatasetsWithLD)%0A%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AtransparenzportalHamburg%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202023)%20.%0A%0A%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution1%20.%0A%20%20%20%20%20%20%3Fdistribution1%20dct%3Aformat%20%3Fformat%20.%0A%20%20%20%20FILTER((CONTAINS(LCASE(STR(%3Fformat))%2C%20%22rdf%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22turtle%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22n3%22)%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22jsonld%22))))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithLD)%0A%20%20%20%20%7D%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table
  - title: Freie Lizenzen
    points: 5
    citations:
      - text: 'mehr als zwei Drittel der aktualisierten Daten Zero oder BY-lizensiert'
        link: https://www.govdata.de/web/guest/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithZeroLicense)%20AS%20%3FdatasetsWithZeroLicense)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithByLicense)%20AS%20%3FdatasetsWithByLicense)%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AtransparenzportalHamburg%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202023)%20.%0A%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution2%20.%0A%20%20%20%20%20%20%3Fdistribution2%20dct%3Alicense%20%3Flicense%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Flicense))%2C%20%22zero%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithZeroLicense)%0A%20%20%20%20%7D%0A%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution2%20.%0A%20%20%20%20%20%20%3Fdistribution2%20dct%3Alicense%20%3Flicense%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Flicense))%2C%20%22by%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithByLicense)%0A%20%20%20%20%7D%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table
    text: Für den Vergleichszeitraum 2023 wurden 99,97% der aktualisierten oder neuen Datensätze mit Zero oder BY-Lizenz versehen
  - title: Open-Data-Beauftragte
    points: 0
  - title: Open-Data-Beratungsstelle
    points: 0
  - title: Open-Data-Labore
    points: 0
  - title: Unterstützungsangebote für Kommunen
    points: 0
  - title: Öffentlichkeitsarbeit
    points: 1
    text: Teilnahme an Barcamps und Konferenzen
  - title: API/Schnittstelle
    points: 0
    citations:
      - text: 'keine API'
        link: https://www.datawrapper.de/_/9CgBo/
  - title: Maschinenlesbarkeit von Plenarprotokollen
    points: 0
    citations:
      - text: 'keine maschinenlesbare Protokolle'
        link: https://www.datawrapper.de/_/9CgBo/
  - title: Aktualität von Plenarprotokollen
    points: 1
    citations:
      - text: 'Veröffentlichung dauert länger als eine Woche'
        link: https://www.datawrapper.de/_/6tNWF/
    text: In der letzten Legislaturperiode lagen im Median 48 Tage zwischen Sitzung und Veröffentlichung
stats:
  lastUpdate: 2024-03-15
  items:
    - text: Datensätze bei govdata gesamt
      value: 14381
    - text: Datensätze aktualisiert in 2023 gesamt
      value: 3795
    - text: Datensätze aktualisiert in 2023 in Format CSV/XML/JSON
      value: 295
    - text: Datensätze in 2023 im Linked-Data-Format bereitgestellt
      value: 0
    - text: Datensätze aktualisiert in 2023 mit Zero-Lizenz
      value: 0
    - text: Datensätze aktualisiert in 2023 mit BY-Lizenz
      value: 3794
---
