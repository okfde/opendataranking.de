---
name: Bremen
short: HB
criteria:
  - title: Rechtsanspruch auf Open Data
    points: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Gesetzeslage
    points: 0
    citations:
      - text: 'EGovG BR (2018)'
        link: https://www.transparenz.bremen.de/metainformationen/gesetz-zur-foerderung-der-elektronischen-verwaltung-in-bremen-vom-20-maerz-2018-112242
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
      - text: '§10 Abs. 1 EGovG BR'
        link: https://www.transparenz.bremen.de/metainformationen/gesetz-zur-foerderung-der-elektronischen-verwaltung-in-bremen-vom-20-maerz-2018-112242?asl=bremen203_tpgesetz.c.55340.de&template=20_gp_ifg_meta_detail_d#jlr-EGovGBRpP10
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
    points: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Portal für Open Data
    points: 3
    citations:
      - text: 'Transparenzportal Bremen'
        link: https://www.transparenz.bremen.de/
  - title: Portal-Schnittstellen
    points: 0
    citations:
      - text: 'nicht vorhanden'
  - title: API mit Dokumentation
    points: 0
    citations:
      - text: 'nicht vorhanden'
  - title: SPARQL-Abfragen
    points: 0
    citations:
      - text: 'nicht vorhanden'
  - title: Aktualität der Daten
    points: 0
    citations:
      - text: 'weniger als 25% des Datenbestands aktualisiert'
        link: https://www.govdata.de/web/guest/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AtransparenzportalBremen%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202023)%20.%0A%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table
    text: Für den Vergleichszeitraum 2023 wurden 1,26% der Datensätze auf das Gesamtdatenvorkommen bezogen neu erstellt oder aktualisiert
  - title: Linked Data
    points: 0
    citations:
      - text: 'keine Linked Data'
        link: https://www.govdata.de/web/guest/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithLD)%20AS%20%3FdatasetsWithLD)%0A%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AtransparenzportalBremen%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202023)%20.%0A%0A%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution1%20.%0A%20%20%20%20%20%20%3Fdistribution1%20dct%3Aformat%20%3Fformat%20.%0A%20%20%20%20FILTER((CONTAINS(LCASE(STR(%3Fformat))%2C%20%22rdf%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22turtle%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22n3%22)%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22jsonld%22))))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithLD)%0A%20%20%20%20%7D%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table
  - title: Freie Lizenzen
    points: 0
    citations:
      - text: 'weniger als die Hälfte der aktualisierten Daten Zero oder BY-lizensiert'
        link: https://www.govdata.de/web/guest/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithZeroLicense)%20AS%20%3FdatasetsWithZeroLicense)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithByLicense)%20AS%20%3FdatasetsWithByLicense)%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AtransparenzportalBremen%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202023)%20.%0A%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution2%20.%0A%20%20%20%20%20%20%3Fdistribution2%20dct%3Alicense%20%3Flicense%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Flicense))%2C%20%22zero%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithZeroLicense)%0A%20%20%20%20%7D%0A%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution2%20.%0A%20%20%20%20%20%20%3Fdistribution2%20dct%3Alicense%20%3Flicense%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Flicense))%2C%20%22by%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithByLicense)%0A%20%20%20%20%7D%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table
    text: Für den Vergleichszeitraum 2023 gab es keine neuen Datensätze mit Zero oder BY-Lizenz
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
        link: https://www.datawrapper.de/_/9CgBo/
  - title: Maschinenlesbarkeit von Plenarprotokollen
    points: 0
    citations:
      - text: 'keine maschinenlesbare Protokolle'
        link: https://www.datawrapper.de/_/9CgBo/
  - title: Aktualität von Plenarprotokollen
    points: 0
    citations:
      - text: 'Veröffentlichung dauert länger als eine Woche'
        link: https://www.datawrapper.de/_/6tNWF/
    text: In der letzten Legislaturperiode lagen im Median 28 Tage zwischen Sitzung und Veröffentlichung
stats:
  lastUpdate: 2024-03-15
  items:
    - text: Datensätze bei govdata gesamt
      value: 159
    - text: Datensätze aktualisiert in 2023 gesamt
      value: 2
    - text: Datensätze aktualisiert in 2023 in Format CSV/XML/JSON
      value: 0
    - text: Datensätze in 2023 im Linked-Data-Format bereitgestellt
      value: 0
    - text: Datensätze aktualisiert in 2023 mit Zero-Lizenz
      value: 0
    - text: Datensätze aktualisiert in 2023 mit BY-Lizenz
      value: 0
---
