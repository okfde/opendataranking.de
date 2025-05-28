---
name: Baden-Württemberg
short: BW
criteria:
  - title: Rechtsanspruch auf Open Data
    points: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Gesetzeslage
    points: 0
    citations:
      - text: 'EGovG BW (2021 [2015])'
        link: https://www.landesrecht-bw.de/perma?a=EGovG_BW
    text: E-Government-Gesetz ohne Open Data
  - title: Evaluation
    points: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Behördendefinition
    points: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Anstalten, Körperschaften, Unternehmen
    points: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Forschungsdaten
    points: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Ausnahmen
    points: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Pauschale Ausschlusskriterien
    points: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Datenkatalog
    points: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Rohdaten
    points: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Daten im Auftrag von Dritten
    points: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Offenheit
    points: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Maschinenlesbarkeit
    points: 1
    citations:
      - text: '§10 Abs. 1 EGovG BW'
        link: https://www.landesrecht-bw.de/perma?d=jlr-EGovGBWpP10
    text: Falls öffentlich verfügbar dann auch maschinenlesbar, besonders falls es ein Weiterverwendungsinteresse gibt (DNG)
  - title: Aktualität
    points: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Dauerhaftigkeit
    points: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Lizenz
    points: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Schnittstellen
    points: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Diskriminierungsfreiheit
    points: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Kostenfreiheit
    points: 1
    citations:
      - text: '§10 Abs. 2 EGovG BW'
        link: https://www.landesrecht-bw.de/perma?d=jlr-EGovGBWpP10
    text: Nutzen kostenfrei, möglicherweise Kosten zur Bereitstellung
  - title: Portal für Open Data
    points: 6
    citations:
      - text: 'daten.bw (2023)'
        link: https://www.daten-bw.de/
  - title: Portal-Schnittstellen
    points: 1
    citations:
      - text: 'es gibt eine Schnittstelle, aber keine Beschreibung'
        link: https://www.daten-bw.de/web/guest/datenbereitstellung
  - title: API mit Dokumentation
    points: 0
    citations:
      - text: 'nicht vorhanden'
  - title: SPARQL-Abfragen
    points: 0
    citations:
      - text: 'nicht vorhanden'
  - title: Aktualität der Daten
    points: 2
    citations:
      - text: 'mehr als 25 Prozent des Datenbestands aktualisiert'
        link: https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202024)%20.%0A%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table
    text: Für den Vergleichszeitraum 2024 wurden 40,91% auf das Gesamtdatenvorkommen bezogen neu erstellt oder aktualisiert (540 von 1320)
  - title: Linked Data
    points: 0
    citations:
      - text: 'keine Linked Data'
        link: https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithLD)%20AS%20%3FdatasetsWithLD)%0A%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202024)%20.%0A%0A%20%20%0A%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution1%20.%0A%20%20%20%20%20%20%3Fdistribution1%20dct%3Aformat%20%3Fformat%20.%0A%20%20%20%20FILTER((CONTAINS(LCASE(STR(%3Fformat))%2C%20%22rdf%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22turtle%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22n3%22)%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22jsonld%22))))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithLD)%0A%20%20%20%20%7D%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table
    text: Für den Vergleichszeitraum 2024 gab es keine Datensätze in einem Linked-Data-Format
  - title: Freie Lizenzen
    points: 2
    citations:
      - text: 'mehr als die Hälfte der aktualisierten Daten stehen unter freier Lizenz'
        link: https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithZeroLicense)%20AS%20%3FdatasetsWithZeroLicense)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithByLicense)%20AS%20%3FdatasetsWithByLicense)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithOWLicense)%20AS%20%3FdatasetsWithOWLicense)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithClosedLicense)%20AS%20%3FdatasetsWithClosedLicense)%0A%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202024)%20.%0A%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution2%20.%0A%20%20%20%20%20%20%3Fdistribution2%20dct%3Alicense%20%3Flicense%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Flicense))%2C%20%22zero%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithZeroLicense)%0A%20%20%20%20%7D%0A%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution2%20.%0A%20%20%20%20%20%20%3Fdistribution2%20dct%3Alicense%20%3Flicense%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Flicense))%2C%20%22by%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithByLicense)%0A%20%20%20%20%7D%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution%20.%0A%20%20%20%20%3Fdistribution%20dct%3Alicense%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2FofficialWork%3E%20.%0A%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithOWLicense)%0A%20%20%7D%0A%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution2%20.%0A%20%20%20%20%20%20%3Fdistribution2%20dct%3Alicense%20%3Flicense%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Flicense))%2C%20%22closed%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithClosedLicense)%0A%20%20%20%20%7D%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table
    text: Für den Vergleichszeitraum 2024 wurden 58,89% der aktualisierten oder neuen Datensätze mit Zero oder BY-Lizenz versehen (318 von 540)
  - title: Hochwertige Datensätze
    points: 0
    citations:
      - text: 'keine HVD'
        link: https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0APREFIX%20dcatap%3A%20%3Chttp%3A%2F%2Fdata.europa.eu%2Fr5r%2F%3E%0A%0ASELECT%20%0A%20%20%3Fcategory%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3FdatasetCount)%0A%20%20(%3FtotalCount%20AS%20%3FtotalDatasetCount)%0AWHERE%20%7B%0A%20%20%23%20Main%20query%20for%20per-category%20counts%0A%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20FILTER(YEAR(%3Fmodified)%20%3D%202024)%20.%0A%20%20%3Fdataset%20dcatap%3AhvdCategory%20%3Fcategory%20.%0A%20%20%0A%20%20%23%20Subquery%20for%20total%20count%20across%20all%20categories%0A%20%20%7B%0A%20%20%20%20SELECT%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3FtotalCount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202024)%20.%0A%20%20%20%20%20%20%3Fdataset%20dcatap%3AhvdCategory%20%3Fcategory%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0AGROUP%20BY%20%3Fcategory%20%3FtotalCount&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table
    text: Für den Vergleichszeitraum 2024 gab es keine Hochwertigen Datensätze
  - title: Open-Data-Beauftragte
    points: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Open-Data-Beratungsstelle
    points: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Open-Data-Labore
    points: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Unterstützungsangebote für Kommunen
    points: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Öffentlichkeitsarbeit
    points: 0
    citations:
      - text: 'keine Erwähnung'
  - title: API/Schnittstelle
    points: 0
    citations:
      - text: 'keine API'
        link: https://www.landtag-bw.de/dokumente
  - title: Maschinenlesbarkeit von Plenarprotokollen
    points: 0
    citations:
      - text: 'keine maschinenlesbare Protokolle'
        link: https://www.landtag-bw.de/dokumente
  - title: Aktualität von Plenarprotokollen
    points: 0
    citations:
      - text: 'Veröffentlichung dauert länger als eine Woche'
        link: https://www.landtag-bw.de/dokumente
stats:
  lastUpdate: 2025-01-15
  items:
    - text: Datensätze bei Govdata gesamt
      value: 1320
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20foaf%3A%20%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0ASELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%20%20(COUNT(DISTINCT%20%3Fname)%20AS%20%3Ftotal_unique_publishers)%0AWHERE%20%7B%0A%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%3Fdataset%20dct%3Apublisher%20%3Fpublisher%20.%0A%20%20%3Fpublisher%20foaf%3Aname%20%3Fname%20.%0A%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%7D%0A&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze 2024 aktualisiert gesamt
      value: 540
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202024)%20.%0A%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze 2024 neu erstellt gesamt
      value: 330
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%3Fdataset%20dct%3Aissued%20%3Fissued%20.%0A%20%20%20%20FILTER(YEAR(%3Fissued)%20%3D%202024)%20.%0A%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Hochwertige Datensätze 2024 aktualisiert gesamt
      value: 0
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0APREFIX%20dcatap%3A%20%3Chttp%3A%2F%2Fdata.europa.eu%2Fr5r%2F%3E%0A%0ASELECT%20%0A%20%20%3Fcategory%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3FdatasetCount)%0A%20%20(%3FtotalCount%20AS%20%3FtotalDatasetCount)%0AWHERE%20%7B%0A%20%20%23%20Main%20query%20for%20per-category%20counts%0A%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20FILTER(YEAR(%3Fmodified)%20%3D%202024)%20.%0A%20%20%3Fdataset%20dcatap%3AhvdCategory%20%3Fcategory%20.%0A%20%20%0A%20%20%23%20Subquery%20for%20total%20count%20across%20all%20categories%0A%20%20%7B%0A%20%20%20%20SELECT%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3FtotalCount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202024)%20.%0A%20%20%20%20%20%20%3Fdataset%20dcatap%3AhvdCategory%20%3Fcategory%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0AGROUP%20BY%20%3Fcategory%20%3FtotalCount&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze 2024 in Linked-Data-Formaten bereitgestellt
      value: 0
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithLD)%20AS%20%3FdatasetsWithLD)%0A%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202024)%20.%0A%0A%20%20%0A%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution1%20.%0A%20%20%20%20%20%20%3Fdistribution1%20dct%3Aformat%20%3Fformat%20.%0A%20%20%20%20FILTER((CONTAINS(LCASE(STR(%3Fformat))%2C%20%22rdf%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22turtle%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22n3%22)%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22jsonld%22))))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithLD)%0A%20%20%20%20%7D%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze 2024 aktualisiert in Formaten CSV/XML/JSON
      value: 124
      link: 'hhttps://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithPDF)%20AS%20%3FdatasetsWithPDF)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithXLS)%20AS%20%3FdatasetsWithXLS)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithCSVXMLJSON)%20AS%20%3FdatasetsWithCSVXMLJSON)%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202024)%20.%0A%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution1%20.%0A%20%20%20%20%20%20%3Fdistribution1%20dct%3Aformat%20%3Fformat%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22pdf%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithPDF)%0A%20%20%20%20%7D%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution1%20.%0A%20%20%20%20%20%20%3Fdistribution1%20dct%3Aformat%20%3Fformat%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22xls%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithXLS)%0A%20%20%20%20%7D%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution1%20.%0A%20%20%20%20%20%20%3Fdistribution1%20dct%3Aformat%20%3Fformat%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22csv%22)%7C%7C%20CONTAINS(LCASE(STR(%3Fformat))%2C%20%22xml%22)%20%7C%7C%20CONTAINS(LCASE(STR(%3Fformat))%2C%20%22json%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithCSVXMLJSON)%0A%20%20%20%20%7D%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze 2024 aktualisiert mit Zero-Lizenz oder lizenzfrei
      value: 16
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithZeroLicense)%20AS%20%3FdatasetsWithZeroLicense)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithByLicense)%20AS%20%3FdatasetsWithByLicense)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithOWLicense)%20AS%20%3FdatasetsWithOWLicense)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithClosedLicense)%20AS%20%3FdatasetsWithClosedLicense)%0A%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202024)%20.%0A%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution2%20.%0A%20%20%20%20%20%20%3Fdistribution2%20dct%3Alicense%20%3Flicense%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Flicense))%2C%20%22zero%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithZeroLicense)%0A%20%20%20%20%7D%0A%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution2%20.%0A%20%20%20%20%20%20%3Fdistribution2%20dct%3Alicense%20%3Flicense%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Flicense))%2C%20%22by%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithByLicense)%0A%20%20%20%20%7D%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution%20.%0A%20%20%20%20%3Fdistribution%20dct%3Alicense%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2FofficialWork%3E%20.%0A%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithOWLicense)%0A%20%20%7D%0A%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution2%20.%0A%20%20%20%20%20%20%3Fdistribution2%20dct%3Alicense%20%3Flicense%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Flicense))%2C%20%22closed%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithClosedLicense)%0A%20%20%20%20%7D%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze 2024 aktualisiert mit BY-Lizenz
      value: 136
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithZeroLicense)%20AS%20%3FdatasetsWithZeroLicense)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithByLicense)%20AS%20%3FdatasetsWithByLicense)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithOWLicense)%20AS%20%3FdatasetsWithOWLicense)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithClosedLicense)%20AS%20%3FdatasetsWithClosedLicense)%0A%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202024)%20.%0A%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution2%20.%0A%20%20%20%20%20%20%3Fdistribution2%20dct%3Alicense%20%3Flicense%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Flicense))%2C%20%22zero%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithZeroLicense)%0A%20%20%20%20%7D%0A%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution2%20.%0A%20%20%20%20%20%20%3Fdistribution2%20dct%3Alicense%20%3Flicense%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Flicense))%2C%20%22by%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithByLicense)%0A%20%20%20%20%7D%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution%20.%0A%20%20%20%20%3Fdistribution%20dct%3Alicense%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2FofficialWork%3E%20.%0A%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithOWLicense)%0A%20%20%7D%0A%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution2%20.%0A%20%20%20%20%20%20%3Fdistribution2%20dct%3Alicense%20%3Flicense%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Flicense))%2C%20%22closed%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithClosedLicense)%0A%20%20%20%20%7D%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
---
Im Bereich offene Verwaltungsdaten hat sich in Baden-Württemberg wenig Beobachtbares getan.
Wie schon im Vorjahr und beim Transparenzranking befindet sich das Land weiter im unteren Drittel der Tabelle.
Das Landes-E-Government-Gesetz beinhaltet derzeit keine Regelungen zu Open Data. Eine Ausnahme bilden
Mobilitätsdaten, die über eine eigene Plattform mobidata-bw.de abzurufen sind. Hier gibt es zudem konkrete Ansprechpartner:innen, eine aktive Community-Arbeit mit Barcamps und regelmäßige Aktualisierungen.
