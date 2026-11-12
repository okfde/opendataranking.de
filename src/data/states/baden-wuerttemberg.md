---
name: Baden-Württemberg
short: BW
criteria:
  - title: Rechtsanspruch auf Open Data
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Gesetzeslage
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'EGovG BW (2021 [2015])'
        link: https://www.landesrecht-bw.de/perma?a=EGovG_BW
    text: E-Government-Gesetz ohne Open Data
  - title: Evaluation
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Behördendefinition
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Anstalten, Körperschaften, Unternehmen
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Forschungsdaten
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Ausnahmen
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Pauschale Ausschlusskriterien
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Datenkatalog
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Rohdaten
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Daten im Auftrag von Dritten
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Offenheit
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Maschinenlesbarkeit
    points:
      2026: 1
      2025: 1
    citations:
      - text: '§10 Abs. 1 EGovG BW'
        link: https://www.landesrecht-bw.de/perma?d=jlr-EGovGBWpP10
    text: Falls öffentlich verfügbar dann auch maschinenlesbar, besonders falls es ein Weiterverwendungsinteresse gibt (DNG)
  - title: Aktualität
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Dauerhaftigkeit
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Lizenz
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Schnittstellen
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Diskriminierungsfreiheit
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Kostenfreiheit
    points:
      2026: 1
      2025: 1
    citations:
      - text: '§10 Abs. 2 EGovG BW'
        link: https://www.landesrecht-bw.de/perma?d=jlr-EGovGBWpP10
    text: Nutzen kostenfrei, möglicherweise Kosten zur Bereitstellung
  - title: Portal für Open Data
    points:
      2026: 6
      2025: 6
    citations:
      - text: 'daten.bw (2023)'
        link: https://www.daten-bw.de/
  - title: Portal-Schnittstellen
    points:
      2026: 1
      2025: 1
    citations:
      - text: 'es gibt eine Schnittstelle, aber keine Beschreibung'
        link: https://www.daten-bw.de/web/guest/datenbereitstellung
  - title: API mit Dokumentation
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'nicht vorhanden'
  - title: SPARQL-Abfragen
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'nicht vorhanden'
  - title: Aktualität der Daten
    points:
      2026: 3
      2025: 2
    citations:
      - text: 'mehr als ein Viertel des Datenbestands aktualisiert'
        link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%20.%0A%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    text: Für den Vergleichszeitraum 2025 wurden 42,53% auf das Gesamtdatenvorkommen bezogen neu erstellt oder aktualisiert (791 von 1860)
  - title: Linked Data
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'keine Linked Data'
        link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithLD)%20AS%20%3FdatasetsWithLD)%0A%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%20.%0A%0A%20%20%0A%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution1%20.%0A%20%20%20%20%20%20%3Fdistribution1%20dct%3Aformat%20%3Fformat%20.%0A%20%20%20%20FILTER((CONTAINS(LCASE(STR(%3Fformat))%2C%20%22rdf%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22turtle%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22n3%22)%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22jsonld%22))))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithLD)%0A%20%20%20%20%7D%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    text: Für den Vergleichszeitraum 2025 gab es keine Datensätze in einem Linked-Data-Format
  - title: Freie Lizenzen
    points:
      2026: 0
      2025: 2
    citations:
      - text: 'weniger als zwei Drittel der aktualisierten Daten steht unter CC-BY-4.0/CC0-Lizenz'
        link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%0ASELECT%20%3Flabel%20%3Fcount%0AWHERE%20%7B%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(STR(%3FlicenseURI)%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%0A%20%20%20%20%20%20VALUES%20%3FlicenseURI%20%7B%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-sa%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nd%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nc%2F4.0%3E%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3FlicenseURI%20.%0A%20%20%20%20%7D%0A%20%20%20%20GROUP%20BY%20%3FlicenseURI%0A%20%20%7D%0A%0A%20%20UNION%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22SUM_CC_BY%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%0A%20%20%20%20%20%20VALUES%20%3FlicenseURI%20%7B%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-sa%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nd%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nc%2F4.0%3E%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3FlicenseURI%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20UNION%0A%20%20%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22http%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-zero%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-zero%3E%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20UNION%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22SUM_CC_ZERO%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-zero%3E%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20UNION%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22TOTAL_MODIFIED_DATASETS%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0AORDER%20BY%20%3Flabel%0A&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=application%2Fn-triples%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    text: Für den Vergleichszeitraum 2025 wurden 23,39% der aktualisierten Datensätze mindestens mit CC-BY-4.0 versehen (185 von 791); der Anteil an CC0 beträgt 5,44% (43 von 791)
  - title: Hochwertige Datensätze
    points:
      2026: 3
      2025: 0
    citations:
      - text: 'es wurden HVD veröffentlicht'
        link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0APREFIX%20dcatap%3A%20%3Chttp%3A%2F%2Fdata.europa.eu%2Fr5r%2F%3E%0A%0ASELECT%20%0A%20%20%3Fcategory%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3FdatasetCount)%0A%20%20(%3FtotalCount%20AS%20%3FtotalDatasetCount)%0AWHERE%20%7B%0A%20%20%23%20Main%20query%20for%20per-category%20counts%0A%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%20.%0A%20%20%3Fdataset%20dcatap%3AhvdCategory%20%3Fcategory%20.%0A%20%20%0A%20%20%23%20Subquery%20for%20total%20count%20across%20all%20categories%0A%20%20%7B%0A%20%20%20%20SELECT%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3FtotalCount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%20.%0A%20%20%20%20%20%20%3Fdataset%20dcatap%3AhvdCategory%20%3Fcategory%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0AGROUP%20BY%20%3Fcategory%20%3FtotalCount&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    text: Für den Vergleichszeitraum 2025 gab es 29 Hochwertige Datensätze aus mindestens 3 verschiedenen Kategorien, auf dem Landesportal werden HVD extra deklariert 
  - title: Bereitstellende Verwaltungseinheit
    points: 
      2026: 0
    citations:
      - text: 'Information bei weniger als einem Viertel der Datensätze vorhanden'
        link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20dcatde%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fdcatde%2F%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0ASELECT%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3FtotalDatasets)%0A%20%20(COUNT(DISTINCT%20%3FhasGeoURI)%20AS%20%3FwithPoliticalGeocodingURI)%0A%20%20(COUNT(DISTINCT%20%3FhasGeoLevel)%20AS%20%3FwithPoliticalGeocodingLevelURI)%0A%0AWHERE%20%7B%0A%20%20%3Fdataset%20a%20dcat%3ADataset%20%3B%0A%20%20%20%20%20%20%20%20%20%20%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%0A%20%20OPTIONAL%20%7B%0A%20%20%20%20%3Fdataset%20dcatde%3ApoliticalGeocodingURI%20%3FgeoURI%20.%0A%20%20%20%20BIND(%3Fdataset%20AS%20%3FhasGeoURI)%0A%20%20%7D%0A%0A%20%20OPTIONAL%20%7B%0A%20%20%20%20%3Fdataset%20dcatde%3ApoliticalGeocodingLevelURI%20%3FgeoLevelURI%20.%0A%20%20%20%20BIND(%3Fdataset%20AS%20%3FhasGeoLevel)%0A%20%20%7D%0A%7D%0A&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=application%2Fn-triples%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    text: Am Stichtag war bei 6,83% der Datensätze das Feld dcat:politicalGeocodingURI ausgefüllt (127 von 1860)
  - title: Open-Data-Beauftragte
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Open-Data-Beratungsstelle
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Open-Data-Labore
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Unterstützungsangebote für Kommunen
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Öffentlichkeitsarbeit
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'keine Erwähnung'
  - title: API/Schnittstelle
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'keine API'
        link: https://www.landtag-bw.de/dokumente
  - title: Maschinenlesbarkeit von Plenarprotokollen
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'keine maschinenlesbare Protokolle'
        link: https://www.landtag-bw.de/dokumente
  - title: Aktualität von Plenarprotokollen
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'Veröffentlichung dauert länger als eine Woche'
        link: https://www.landtag-bw.de/dokumente
stats:
lastUpdate: 2026-01-15
items:
    - text: Datensätze bei Govdata gesamt
      value: 1860
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20foaf%3A%20%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0ASELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%20%20(COUNT(DISTINCT%20%3Fname)%20AS%20%3Ftotal_unique_publishers)%0AWHERE%20%7B%0A%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%3Fdataset%20dct%3Apublisher%20%3Fpublisher%20.%0A%20%20%3Fpublisher%20foaf%3Aname%20%3Fname%20.%0A%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%7D%0A&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze 2025 aktualisiert
      value: 791
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%20.%0A%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze 2025 neu erstellt 
      value: 524
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%3Fdataset%20dct%3Aissued%20%3Fissued%20.%0A%20%20%20%20FILTER(YEAR(%3Fissued)%20%3D%202025)%20.%0A%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Hochwertige Datensätze 2025 aktualisiert
      value: 29
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0APREFIX%20dcatap%3A%20%3Chttp%3A%2F%2Fdata.europa.eu%2Fr5r%2F%3E%0A%0A%0A%20SELECT%20%0A%20%20%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithHVD)%20AS%20%3FdatasetsWithHVD)%0A%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%09%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20%3B%0A%20%20%20%20%20%20%20%09%20%20%20dcatap%3AapplicableLegislation%20%3Flegislation%3B%20%0A%20%20%20%20%20%20%20%20%20%20%20dcatap%3AhvdCategory%20%3Fcategory.%0A%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithHVD)%0A%20%20%20%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze 2025 in Linked-Data-Formaten bereitgestellt
      value: 0
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithLD)%20AS%20%3FdatasetsWithLD)%0A%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%20.%0A%0A%20%20%0A%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution1%20.%0A%20%20%20%20%20%20%3Fdistribution1%20dct%3Aformat%20%3Fformat%20.%0A%20%20%20%20FILTER((CONTAINS(LCASE(STR(%3Fformat))%2C%20%22rdf%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22turtle%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22n3%22)%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22jsonld%22))))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithLD)%0A%20%20%20%20%7D%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze 2025 aktualisiert in Formaten CSV/XML/JSON
      value: 153
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithPDF)%20AS%20%3FdatasetsWithPDF)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithXLS)%20AS%20%3FdatasetsWithXLS)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithCSVXMLJSON)%20AS%20%3FdatasetsWithCSVXMLJSON)%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%20.%0A%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution1%20.%0A%20%20%20%20%20%20%3Fdistribution1%20dct%3Aformat%20%3Fformat%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22pdf%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithPDF)%0A%20%20%20%20%7D%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution1%20.%0A%20%20%20%20%20%20%3Fdistribution1%20dct%3Aformat%20%3Fformat%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22xls%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithXLS)%0A%20%20%20%20%7D%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution1%20.%0A%20%20%20%20%20%20%3Fdistribution1%20dct%3Aformat%20%3Fformat%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22csv%22)%7C%7C%20CONTAINS(LCASE(STR(%3Fformat))%2C%20%22xml%22)%20%7C%7C%20CONTAINS(LCASE(STR(%3Fformat))%2C%20%22json%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithCSVXMLJSON)%0A%20%20%20%20%7D%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze 2025 aktualisiert in GIS-Formaten (gml,geojson,shp,etc.)
      value: 551
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithGisdata)%20AS%20%3FdatasetsWithGisdata)%0A%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%20.%0A%0A%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution1%20.%0A%20%20%20%20%20%20%3Fdistribution1%20dct%3Aformat%20%3Fformat%20.%0A%20%20%20%20FILTER((CONTAINS(LCASE(STR(%3Fformat))%2C%20%22geo%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22gml%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22gpx%22)%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22kml%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22gpkg%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22shp%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22shape%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22tiff%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22wfs%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22wms%22))%20))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithGisdata)%0A%20%20%20%20%7D%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze mit dcat:politicalGeocodingURI 
      value: 127
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20dcatde%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fdcatde%2F%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0ASELECT%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3FtotalDatasets)%0A%20%20(COUNT(DISTINCT%20%3FhasGeoURI)%20AS%20%3FwithPoliticalGeocodingURI)%0A%20%20(COUNT(DISTINCT%20%3FhasGeoLevel)%20AS%20%3FwithPoliticalGeocodingLevelURI)%0A%20%20(COUNT(DISTINCT%20%3FhasAnyGeo)%20AS%20%3FwithAtLeastOneGeocoding)%0AWHERE%20%7B%0A%20%20%3Fdataset%20a%20dcat%3ADataset%20%3B%0A%20%20%20%20%20%20%20%20%20%20%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%0A%20%20OPTIONAL%20%7B%0A%20%20%20%20%3Fdataset%20dcatde%3ApoliticalGeocodingURI%20%3FgeoURI%20.%0A%20%20%20%20BIND(%3Fdataset%20AS%20%3FhasGeoURI)%0A%20%20%7D%0A%0A%20%20OPTIONAL%20%7B%0A%20%20%20%20%3Fdataset%20dcatde%3ApoliticalGeocodingLevelURI%20%3FgeoLevelURI%20.%0A%20%20%20%20BIND(%3Fdataset%20AS%20%3FhasGeoLevel)%0A%20%20%7D%0A%0A%20%20OPTIONAL%20%7B%0A%20%20%20%20%3Fdataset%20dcatde%3ApoliticalGeocodingURI%20%3FgeoURI%20.%0A%20%20%20%20BIND(%3Fdataset%20AS%20%3FhasAnyGeo)%0A%20%20%7D%0A%20%20OPTIONAL%20%7B%0A%20%20%20%20%3Fdataset%20dcatde%3ApoliticalGeocodingLevelURI%20%3FgeoLevelURI%20.%0A%20%20%20%20BIND(%3Fdataset%20AS%20%3FhasAnyGeo)%0A%20%20%7D%0A%7D%0A&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=application%2Fn-triples%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze 2025 aktualisiert mit CC0-Lizenz
      value: 43
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%0ASELECT%20%3Flabel%20%3Fcount%0AWHERE%20%7B%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(STR(%3FlicenseURI)%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%0A%20%20%20%20%20%20VALUES%20%3FlicenseURI%20%7B%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-sa%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nd%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nc%2F4.0%3E%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3FlicenseURI%20.%0A%20%20%20%20%7D%0A%20%20%20%20GROUP%20BY%20%3FlicenseURI%0A%20%20%7D%0A%0A%20%20UNION%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22SUM_CC_BY%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%0A%20%20%20%20%20%20VALUES%20%3FlicenseURI%20%7B%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-sa%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nd%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nc%2F4.0%3E%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3FlicenseURI%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20UNION%0A%20%20%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22http%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-zero%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-zero%3E%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20UNION%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22SUM_CC_ZERO%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-zero%3E%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20UNION%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22TOTAL_MODIFIED_DATASETS%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0AORDER%20BY%20%3Flabel%0A&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=application%2Fn-triples%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze 2025 aktualisiert mit CC-BY-4.0-Lizenz
      value: 142
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%0ASELECT%20%3Flabel%20%3Fcount%0AWHERE%20%7B%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(STR(%3FlicenseURI)%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%0A%20%20%20%20%20%20VALUES%20%3FlicenseURI%20%7B%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-sa%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nd%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nc%2F4.0%3E%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3FlicenseURI%20.%0A%20%20%20%20%7D%0A%20%20%20%20GROUP%20BY%20%3FlicenseURI%0A%20%20%7D%0A%0A%20%20UNION%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22SUM_CC_BY%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%0A%20%20%20%20%20%20VALUES%20%3FlicenseURI%20%7B%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-sa%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nd%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nc%2F4.0%3E%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3FlicenseURI%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20UNION%0A%20%20%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22http%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-zero%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-zero%3E%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20UNION%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22SUM_CC_ZERO%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-zero%3E%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20UNION%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22TOTAL_MODIFIED_DATASETS%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AdatenBW%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0AORDER%20BY%20%3Flabel%0A&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=application%2Fn-triples%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
---
Auch 2025 bleibt Baden-Württemberg hinter den Erwartungen zurück. Zwar ist die Zahl der verfügbaren Datensätze im vergangenen Jahr gewachsen, ansonsten hat sich jedoch wenig getan.
Der Rechtsrahmen für Open Data ist nach wie vor nur sehr rudimentär vorhanden. Auch die Antworten der Umfrage zu Open-Data-Stellen liefern keine neuen Erkenntnisse. Im Koalitionsvertrag der neuen Landesregierung, die im Jahr 2026 ihre Arbeit aufgenommen hat, ist von einer Kultur der offenen Daten und standardisierter Schnittstellen die Rede. Das Open-Data-Portal soll „unter Berücksichtigung von Sicherheitsaspekten in Zeiten hybrider Bedrohungen” ausgebaut werden und es sollen Datensilos aufgebrochen werden. Konkrete Schritte, wie etwa die Schaffung eines Transparenzgesetzes, sind allerdings nicht im Koalitionsvertrag verankert. Für Mobilitätsdaten gibt es weiterhin eine Parallelstruktur, die über die eigene Plattform mobidata-bw.de abzurufen ist. Hier gibt es zudem konkrete Ansprechpartner:innen, eine aktive Community-Arbeit mit Barcamps und regelmäßige Aktualisierungen – also all das, was ebenfalls für das zentrale Portal wünschenswert wäre.
