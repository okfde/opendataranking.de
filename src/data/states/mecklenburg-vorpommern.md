---
name: Mecklenburg-Vorpommern
short: MV
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
      - text: 'EGovG M-V (2024[2016])'
        link: https://www.landesrecht-mv.de/bsmv/document/jlr-EGovGMVrahmen
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
      - text: '§8 Abs. 1 EGovG M-V'
        link: https://www.landesrecht-mv.de/bsmv/document/jlr-EGovGMVpP8
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
      2026: 0
      2025: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Portal für Open Data
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'nicht vorhanden'
  - title: Portal-Schnittstellen
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'nicht vorhanden'
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
      2026: 0
      2025: 0
    citations:
      - text: 'keine Daten aktualisiert'
        link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AmecklenburgVorpommern%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%20.%0A%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    text: Für den Vergleichszeitraum 2025 wurden keine Datensätze neu erstellt oder aktualisiert
  - title: Linked Data
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'keine Linked Data'
        link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithLD)%20AS%20%3FdatasetsWithLD)%0A%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AmecklenburgVorpommern%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%20.%0A%0A%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution1%20.%0A%20%20%20%20%20%20%3Fdistribution1%20dct%3Aformat%20%3Fformat%20.%0A%20%20%20%20FILTER((CONTAINS(LCASE(STR(%3Fformat))%2C%20%22rdf%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22turtle%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22n3%22)%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22jsonld%22))))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithLD)%0A%20%20%20%20%7D%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    text: Für den Vergleichszeitraum 2025 gab es keine Datensätze in einem Linked-Data-Format
  - title: Freie Lizenzen
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'keine Daten aktualisiert'
        link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%0ASELECT%20%3Flabel%20%3Fcount%0AWHERE%20%7B%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(STR(%3FlicenseURI)%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%0A%20%20%20%20%20%20VALUES%20%3FlicenseURI%20%7B%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-sa%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nd%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nc%2F4.0%3E%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AmecklenburgVorpommern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3FlicenseURI%20.%0A%20%20%20%20%7D%0A%20%20%20%20GROUP%20BY%20%3FlicenseURI%0A%20%20%7D%0A%0A%20%20UNION%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22SUM_CC_BY%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%0A%20%20%20%20%20%20VALUES%20%3FlicenseURI%20%7B%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-sa%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nd%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nc%2F4.0%3E%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AmecklenburgVorpommern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3FlicenseURI%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20UNION%0A%20%20%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22http%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-zero%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AmecklenburgVorpommern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-zero%3E%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20UNION%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22SUM_CC_ZERO%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AmecklenburgVorpommern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-zero%3E%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20UNION%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22TOTAL_MODIFIED_DATASETS%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AmecklenburgVorpommern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0AORDER%20BY%20%3Flabel%0A&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=application%2Fn-triples%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    text: Für den Vergleichszeitraum 2025 wurden keine Daten veröffentlicht
  - title: Hochwertige Datensätze
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'keine HVD'
        link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0APREFIX%20dcatap%3A%20%3Chttp%3A%2F%2Fdata.europa.eu%2Fr5r%2F%3E%0A%0ASELECT%20%0A%20%20%3Fcategory%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3FdatasetCount)%0A%20%20(%3FtotalCount%20AS%20%3FtotalDatasetCount)%0AWHERE%20%7B%0A%20%20%23%20Main%20query%20for%20per-category%20counts%0A%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AmecklenburgVorpommern%20.%0A%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%20.%0A%20%20%3Fdataset%20dcatap%3AhvdCategory%20%3Fcategory%20.%0A%20%20%0A%20%20%23%20Subquery%20for%20total%20count%20across%20all%20categories%0A%20%20%7B%0A%20%20%20%20SELECT%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3FtotalCount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AmecklenburgVorpommern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%20.%0A%20%20%20%20%20%20%3Fdataset%20dcatap%3AhvdCategory%20%3Fcategory%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0AGROUP%20BY%20%3Fcategory%20%3FtotalCount&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    text: Für den Vergleichszeitraum 2025 gab es keine Hochwertigen Datensätze
  - title: Bereitstellende Verwaltungseinheit
    points:
      2026: 0
    citations:
      - text: 'keine Daten vorhanden'
        link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20dcatde%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fdcatde%2F%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0ASELECT%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3FtotalDatasets)%0A%20%20(COUNT(DISTINCT%20%3FhasGeoURI)%20AS%20%3FwithPoliticalGeocodingURI)%0A%20%20(COUNT(DISTINCT%20%3FhasGeoLevel)%20AS%20%3FwithPoliticalGeocodingLevelURI)%0A%0AWHERE%20%7B%0A%20%20%3Fdataset%20a%20dcat%3ADataset%20%3B%0A%20%20%20%20%20%20%20%20%20%20%20%3FcontributorIDpredicate%20contributor%3AmecklenburgVorpommern%20.%0A%0A%20%20OPTIONAL%20%7B%0A%20%20%20%20%3Fdataset%20dcatde%3ApoliticalGeocodingURI%20%3FgeoURI%20.%0A%20%20%20%20BIND(%3Fdataset%20AS%20%3FhasGeoURI)%0A%20%20%7D%0A%0A%20%20OPTIONAL%20%7B%0A%20%20%20%20%3Fdataset%20dcatde%3ApoliticalGeocodingLevelURI%20%3FgeoLevelURI%20.%0A%20%20%20%20BIND(%3Fdataset%20AS%20%3FhasGeoLevel)%0A%20%20%7D%0A%7D%0A&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=application%2Fn-triples%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    text: Für den Vergleichszeitraum 2025 wurden keine Daten veröffentlicht
  - title: Open-Data-Beauftragte
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'nicht vorhanden'
  - title: Open-Data-Beratungsstelle
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'nicht vorhanden'
  - title: Open-Data-Labore
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'nicht vorhanden'
  - title: Unterstützungsangebote für Kommunen
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'nicht vorhanden'
  - title: Öffentlichkeitsarbeit
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'nicht vorhanden'
  - title: API/Schnittstelle
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'keine API'
        link: https://www.dokumentation.landtag-mv.de/parldok/suche/10_1_8___8.%20Wahlperiode%20(26.10.2021%20-%2025.10.2026)/7_1_2___Dokumentart%3A%20Plenarprotokoll
  - title: Maschinenlesbarkeit von Plenarprotokollen
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'keine maschinenlesbare Protokolle'
        link: https://www.dokumentation.landtag-mv.de/parldok/suche/10_1_8___8.%20Wahlperiode%20(26.10.2021%20-%2025.10.2026)/7_1_2___Dokumentart%3A%20Plenarprotokoll
  - title: Aktualität von Plenarprotokollen
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'Veröffentlichung dauert länger als eine Woche'
        link: https://www.dokumentation.landtag-mv.de/parldok/suche/10_1_8___8.%20Wahlperiode%20(26.10.2021%20-%2025.10.2026)/7_1_2___Dokumentart%3A%20Plenarprotokoll
stats:
  lastUpdate: 2026-01-15
  items:
    - text: Datensätze bei GovData gesamt
      value: 0
      link: 'https://www.govdata.de/web/guest/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20foaf%3A%20%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0ASELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%20%20(COUNT(DISTINCT%20%3Fname)%20AS%20%3Ftotal_unique_publishers)%0AWHERE%20%7B%0A%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%3Fdataset%20dct%3Apublisher%20%3Fpublisher%20.%0A%20%20%3Fpublisher%20foaf%3Aname%20%3Fname%20.%0A%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AmecklenburgVorpommern%20.%0A%7D%0A&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze 2025 aktualisiert 
      value: 0
      link: 'https://www.govdata.de/web/guest/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AmecklenburgVorpommern%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%20.%0A%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze 2025 neu erstellt 
      value: 0
      link: 'https://www.govdata.de/web/guest/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AmecklenburgVorpommern%20.%0A%20%20%20%20%3Fdataset%20dct%3Aissued%20%3Fisued%20.%0A%20%20%20%20FILTER(YEAR(%3Fissued)%20%3D%202025)%20.%0A%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Hochwertige Datensätze 2025 aktualisiert 
      value: 0
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0APREFIX%20dcatap%3A%20%3Chttp%3A%2F%2Fdata.europa.eu%2Fr5r%2F%3E%0A%0ASELECT%20%0A%20%20%3Fcategory%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3FdatasetCount)%0A%20%20(%3FtotalCount%20AS%20%3FtotalDatasetCount)%0AWHERE%20%7B%0A%20%20%23%20Main%20query%20for%20per-category%20counts%0A%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AmecklenburgVorpommern%20.%0A%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%20.%0A%20%20%3Fdataset%20dcatap%3AhvdCategory%20%3Fcategory%20.%0A%20%20%0A%20%20%23%20Subquery%20for%20total%20count%20across%20all%20categories%0A%20%20%7B%0A%20%20%20%20SELECT%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3FtotalCount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AmecklenburgVorpommern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%20.%0A%20%20%20%20%20%20%3Fdataset%20dcatap%3AhvdCategory%20%3Fcategory%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0AGROUP%20BY%20%3Fcategory%20%3FtotalCount&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze 2025 aktualisiert in Formaten CSV/XML/JSON
      value: 0
      link: 'https://www.govdata.de/web/guest/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithPDF)%20AS%20%3FdatasetsWithPDF)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithXLS)%20AS%20%3FdatasetsWithXLS)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithCSVXMLJSON)%20AS%20%3FdatasetsWithCSVXMLJSON)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithLD)%20AS%20%3FdatasetsWithLD)%0A%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AmecklenburgVorpommern%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%20.%0A%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution1%20.%0A%20%20%20%20%20%20%3Fdistribution1%20dct%3Aformat%20%3Fformat%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22pdf%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithPDF)%0A%20%20%20%20%7D%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution1%20.%0A%20%20%20%20%20%20%3Fdistribution1%20dct%3Aformat%20%3Fformat%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22xls%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithXLS)%0A%20%20%20%20%7D%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution1%20.%0A%20%20%20%20%20%20%3Fdistribution1%20dct%3Aformat%20%3Fformat%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22csv%22)%7C%7C%20CONTAINS(LCASE(STR(%3Fformat))%2C%20%22xml%22)%20%7C%7C%20CONTAINS(LCASE(STR(%3Fformat))%2C%20%22json%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithCSVXMLJSON)%0A%20%20%20%20%7D%0A%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution1%20.%0A%20%20%20%20%20%20%3Fdistribution1%20dct%3Aformat%20%3Fformat%20.%0A%20%20%20%20FILTER((CONTAINS(LCASE(STR(%3Fformat))%2C%20%22rdf%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22turtle%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22n3%22)%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22jsonld%22))))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithLD)%0A%20%20%20%20%7D%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze 2025 aktualisiert in GIS-Formaten (gml,geojson,shp,etc.)
      value: 0
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithGisdata)%20AS%20%3FdatasetsWithGisdata)%0A%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AmecklenburgVorpommern%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%20.%0A%0A%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution1%20.%0A%20%20%20%20%20%20%3Fdistribution1%20dct%3Aformat%20%3Fformat%20.%0A%20%20%20%20FILTER((CONTAINS(LCASE(STR(%3Fformat))%2C%20%22geo%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22gml%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22gpx%22)%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22kml%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22gpkg%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22shp%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22shape%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22tiff%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22wfs%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22wms%22))%20))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithGisdata)%0A%20%20%20%20%7D%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze 2025 in Linked-Data-Formaten bereitgestellt
      value: 0
      link: 'https://www.govdata.de/web/guest/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithLD)%20AS%20%3FdatasetsWithLD)%0A%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AmecklenburgVorpommern%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%20.%0A%0A%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution1%20.%0A%20%20%20%20%20%20%3Fdistribution1%20dct%3Aformat%20%3Fformat%20.%0A%20%20%20%20FILTER((CONTAINS(LCASE(STR(%3Fformat))%2C%20%22rdf%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22turtle%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22n3%22)%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22jsonld%22))))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithLD)%0A%20%20%20%20%7D%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze mit dcat:politicalGeocodingURI 
      value: 0
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20dcatde%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fdcatde%2F%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0ASELECT%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3FtotalDatasets)%0A%20%20(COUNT(DISTINCT%20%3FhasGeoURI)%20AS%20%3FwithPoliticalGeocodingURI)%0A%20%20(COUNT(DISTINCT%20%3FhasGeoLevel)%20AS%20%3FwithPoliticalGeocodingLevelURI)%0A%0AWHERE%20%7B%0A%20%20%3Fdataset%20a%20dcat%3ADataset%20%3B%0A%20%20%20%20%20%20%20%20%20%20%20%3FcontributorIDpredicate%20contributor%3AmecklenburgVorpommern%20.%0A%0A%20%20OPTIONAL%20%7B%0A%20%20%20%20%3Fdataset%20dcatde%3ApoliticalGeocodingURI%20%3FgeoURI%20.%0A%20%20%20%20BIND(%3Fdataset%20AS%20%3FhasGeoURI)%0A%20%20%7D%0A%0A%20%20OPTIONAL%20%7B%0A%20%20%20%20%3Fdataset%20dcatde%3ApoliticalGeocodingLevelURI%20%3FgeoLevelURI%20.%0A%20%20%20%20BIND(%3Fdataset%20AS%20%3FhasGeoLevel)%0A%20%20%7D%0A%7D%0A&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=application%2Fn-triples%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze 2025 aktualisiert mit CC0-Lizenz
      value: 0
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%0ASELECT%20%3Flabel%20%3Fcount%0AWHERE%20%7B%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(STR(%3FlicenseURI)%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%0A%20%20%20%20%20%20VALUES%20%3FlicenseURI%20%7B%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-sa%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nd%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nc%2F4.0%3E%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AmecklenburgVorpommern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3FlicenseURI%20.%0A%20%20%20%20%7D%0A%20%20%20%20GROUP%20BY%20%3FlicenseURI%0A%20%20%7D%0A%0A%20%20UNION%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22SUM_CC_BY%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%0A%20%20%20%20%20%20VALUES%20%3FlicenseURI%20%7B%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-sa%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nd%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nc%2F4.0%3E%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AmecklenburgVorpommern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3FlicenseURI%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20UNION%0A%20%20%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22http%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-zero%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AmecklenburgVorpommern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-zero%3E%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20UNION%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22SUM_CC_ZERO%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AmecklenburgVorpommern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-zero%3E%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20UNION%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22TOTAL_MODIFIED_DATASETS%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AmecklenburgVorpommern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0AORDER%20BY%20%3Flabel%0A&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=application%2Fn-triples%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze 2025 aktualisiert mit CC-BY-4.0-Lizenz
      value: 0
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%0ASELECT%20%3Flabel%20%3Fcount%0AWHERE%20%7B%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(STR(%3FlicenseURI)%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%0A%20%20%20%20%20%20VALUES%20%3FlicenseURI%20%7B%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-sa%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nd%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nc%2F4.0%3E%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AmecklenburgVorpommern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3FlicenseURI%20.%0A%20%20%20%20%7D%0A%20%20%20%20GROUP%20BY%20%3FlicenseURI%0A%20%20%7D%0A%0A%20%20UNION%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22SUM_CC_BY%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%0A%20%20%20%20%20%20VALUES%20%3FlicenseURI%20%7B%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-sa%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nd%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nc%2F4.0%3E%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AmecklenburgVorpommern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3FlicenseURI%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20UNION%0A%20%20%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22http%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-zero%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AmecklenburgVorpommern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-zero%3E%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20UNION%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22SUM_CC_ZERO%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AmecklenburgVorpommern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-zero%3E%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20UNION%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22TOTAL_MODIFIED_DATASETS%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AmecklenburgVorpommern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0AORDER%20BY%20%3Flabel%0A&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=application%2Fn-triples%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
---
Mecklenburg-Vorpommern steht im Ranking weiterhin auf dem letzten Platz. Auch die Open-Data-Umfrage liefert keine neuen Erkenntnisse zur zentralen Steuerung dieses Themas im Land. Der Koalitionsvertrag des neuen rot-rot-grünen Regierungsbündnisses verspricht in dieser Hinsicht ebenfalls kaum Besserung. Immerhin: Im Bereich Geoinformationswesen funktioniert die Datenbereitstellung.
