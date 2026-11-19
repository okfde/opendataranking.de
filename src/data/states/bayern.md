---
name: Bayern
short: BY
criteria:
  - title: Rechtsanspruch auf Open Data
    points:
      2026: 0
      2025: 0
  - title: Gesetzeslage
    points:
      2026: 1
      2025: 1
    citations:
      - text: 'BayDiG (2022)'
        link: https://www.gesetze-bayern.de/Content/Document/BayDiG/true
      - text: 'BayDiV (2023)'
        link: https://www.gesetze-bayern.de/Content/Document/BayDiV
    text: Digitalgesetz mit einem Mini-Paragraphen Open Data
  - title: Evaluation
    points:
      2026: 0
      2025: 0
  - title: Behördendefinition
    points:
      2026: 1
      2025: 1
    citations:
      - text: '§14 Abs. 1 BayDiG'
        link: https://www.gesetze-bayern.de/Content/Document/BayDiG-14
    text: Staatliche Behörden
  - title: Anstalten, Körperschaften, Unternehmen
    points:
      2026: 0
      2025: 0
  - title: Forschungsdaten
    points:
      2026: 0
      2025: 0
  - title: Ausnahmen
    points:
      2026: 0
      2025: 0
  - title: Pauschale Ausschlusskriterien
    points:
      2026: 0
      2025: 0
  - title: Datenkatalog
    points:
      2026: 0
      2025: 0
  - title: Rohdaten
    points:
      2026: 0
      2025: 0
  - title: Daten im Auftrag von Dritten
    points:
      2026: 0
      2025: 0
  - title: Offenheit
    points:
      2026: 0
      2025: 0
  - title: Maschinenlesbarkeit
    points:
      2026: 0
      2025: 0
  - title: Aktualität
    points:
      2026: 0
      2025: 0
  - title: Dauerhaftigkeit
    points:
      2026: 0
      2025: 0
  - title: Lizenz
    points:
      2026: 0
      2025: 0
  - title: Schnittstellen
    points:
      2026: 0
      2025: 0
  - title: Diskriminierungsfreiheit
    points:
      2026: 0
      2025: 0
  - title: Kostenfreiheit
    points:
      2026: 0
      2025: 0
  - title: Portal für Open Data
    points:
      2026: 6
      2025: 6
    citations:
      - text: 'open bydata (2023)'
        link: https://open.bydata.de/
  - title: Portal-Schnittstellen
    points:
      2026: 3
      2025: 3
    citations:
      - text: 'Schnittstellen mit Hilfestellung'
        link: https://oc.bydata.de/sharing
  - title: API mit Dokumentation
    points:
      2026: 3
      2025: 3
    citations:
      - text: 'APIs mit Beschreibung'
        link: https://open.bydata.de/api
  - title: SPARQL-Abfragen
    points:
      2026: 3
      2025: 3
    citations:
      - text: 'SPARQL-API vorhanden'
        link: https://open.bydata.de/sparql
  - title: Aktualität der Daten
    points:
      2026: 3
      2025: 4
    citations:
      - text: 'mehr als ein Viertel des Datenbestands aktualisiert'
        link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBayern%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%20.%0A%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    text: Für den Vergleichszeitraum 2025 wurden 43,42% auf das Gesamtdatenvorkommen bezogen neu erstellt oder aktualisiert (10308 von 23739)
  - title: Linked Data
    points:
      2026: 1
      2025: 2
    citations:
      - text: 'es wurden Linked Data veröffentlicht'
        link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithLD)%20AS%20%3FdatasetsWithLD)%0A%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBayern%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%20.%0A%0A%20%20%0A%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution1%20.%0A%20%20%20%20%20%20%3Fdistribution1%20dct%3Aformat%20%3Fformat%20.%0A%20%20%20%20FILTER((CONTAINS(LCASE(STR(%3Fformat))%2C%20%22rdf%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22turtle%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22n3%22)%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22jsonld%22))))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithLD)%0A%20%20%20%20%7D%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    text: Für den Vergleichszeitraum 2025 wurden 1,53% der neu erstellten Datensätze in einem Linked-Data-Format veröffentlicht (67 von 4387)
  - title: Freie Lizenzen
    points:
      2026: 2
      2025: 4
    citations:
      - text: 'mehr als zwei Drittel der aktualisierten Daten steht unter CC-BY-4.0/CC0-Lizenz'
        link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%0ASELECT%20%3Flabel%20%3Fcount%0AWHERE%20%7B%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(STR(%3FlicenseURI)%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%0A%20%20%20%20%20%20VALUES%20%3FlicenseURI%20%7B%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-sa%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nd%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nc%2F4.0%3E%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBayern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3FlicenseURI%20.%0A%20%20%20%20%7D%0A%20%20%20%20GROUP%20BY%20%3FlicenseURI%0A%20%20%7D%0A%0A%20%20UNION%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22SUM_CC_BY%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%0A%20%20%20%20%20%20VALUES%20%3FlicenseURI%20%7B%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-sa%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nd%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nc%2F4.0%3E%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBayern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3FlicenseURI%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20UNION%0A%20%20%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22http%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-zero%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBayern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-zero%3E%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20UNION%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22SUM_CC_ZERO%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBayern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-zero%3E%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20UNION%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22TOTAL_MODIFIED_DATASETS%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBayern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0AORDER%20BY%20%3Flabel%0A&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=application%2Fn-triples%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    text: Für den Vergleichszeitraum 2025 wurden 96,20% der aktualisierten Datensätze mindestens mit CC-BY-4.0 versehen (9916 von 10308); der Anteil an CC0 beträgt 17,73% (1828 von 10308)
  - title: Hochwertige Datensätze
    points:
      2026: 3
      2025: 3
    citations:
      - text: 'es wurden HVD veröffentlicht'
        link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0APREFIX%20dcatap%3A%20%3Chttp%3A%2F%2Fdata.europa.eu%2Fr5r%2F%3E%0A%0ASELECT%20%0A%20%20%3Fcategory%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3FdatasetCount)%0A%20%20(%3FtotalCount%20AS%20%3FtotalDatasetCount)%0AWHERE%20%7B%0A%20%20%23%20Main%20query%20for%20per-category%20counts%0A%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBayern%20.%0A%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%20.%0A%20%20%3Fdataset%20dcatap%3AhvdCategory%20%3Fcategory%20.%0A%20%20%0A%20%20%23%20Subquery%20for%20total%20count%20across%20all%20categories%0A%20%20%7B%0A%20%20%20%20SELECT%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3FtotalCount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBayern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%20.%0A%20%20%20%20%20%20%3Fdataset%20dcatap%3AhvdCategory%20%3Fcategory%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0AGROUP%20BY%20%3Fcategory%20%3FtotalCount&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    text: Für den Vergleichszeitraum 2025 gab es 63 Hochwertige Datensätze aus 4 verschiedenen Kategorien, auf dem Landesportal werden sie extra deklariert
  - title: Bereitstellende Verwaltungseinheit
    points: 
      2026: 0
    citations:
      - text: 'Information bei weniger als einem Viertel der Datensätze vorhanden'
        link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20dcatde%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fdcatde%2F%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0ASELECT%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3FtotalDatasets)%0A%20%20(COUNT(DISTINCT%20%3FhasGeoURI)%20AS%20%3FwithPoliticalGeocodingURI)%0A%20%20(COUNT(DISTINCT%20%3FhasGeoLevel)%20AS%20%3FwithPoliticalGeocodingLevelURI)%0AWHERE%20%7B%0A%20%20%3Fdataset%20a%20dcat%3ADataset%20%3B%0A%20%20%20%20%20%20%20%20%20%20%20%3FcontributorIDpredicate%20contributor%3AopenDataBayern%20.%0A%0A%20%20OPTIONAL%20%7B%0A%20%20%20%20%3Fdataset%20dcatde%3ApoliticalGeocodingURI%20%3FgeoURI%20.%0A%20%20%20%20BIND(%3Fdataset%20AS%20%3FhasGeoURI)%0A%20%20%7D%0A%0A%20%20OPTIONAL%20%7B%0A%20%20%20%20%3Fdataset%20dcatde%3ApoliticalGeocodingLevelURI%20%3FgeoLevelURI%20.%0A%20%20%20%20BIND(%3Fdataset%20AS%20%3FhasGeoLevel)%0A%20%20%7D%0A%0A%7D%0A&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=application%2Fn-triples%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    text: Am Stichtag war bei 4,76% der Datensätze das Feld dcat:politicalGeocodingURI ausgefüllt (1130 von 23739)
  - title: Open-Data-Beauftragte
    points:
      2026: 0
      2025: 0
  - title: Open-Data-Beratungsstelle
    points:
      2026: 1
      2025: 1
    citations:
      - text: 'open bydata competence center'
        link: https://oc.bydata.de/
    text: keine gesetzliche Grundlage, bei der byte - Bayerische Agentur für Digitales GmbH verankert
  - title: Open-Data-Labore
    points:
      2026: 2
      2025: 0
    citations:
      - text: 'Gitlab'
        link: https://gitlab.opencode.de/byte-bayerische-agentur-f-r-digitales-gmbh/open-bydata-competence-center
    text: Usecases und Weiterentwicklungen durch das open bydata competence center
  - title: Unterstützungsangebote für Kommunen
    points:
      2026: 2
      2025: 2
    citations:
      - text: 'open bydata competence center'
        link: https://oc.bydata.de/sharing/presence
    text: Outreach über das competence center und eigene Präsenz auf dem Open-Data-Portal
  - title: Öffentlichkeitsarbeit
    points:
      2026: 2
      2025: 2
    citations:
      - text: 'open bydata competence center'
        link: https://oc.bydata.de/using
    text: Open Data Day, öffentliche Projekte mit Angeboten zur Zusammenarbeit
  - title: API/Schnittstelle
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'keine API'
        link: https://www.bayern.landtag.de/webangebot3/views/protokolle/protokollsuche.xhtml
  - title: Maschinenlesbarkeit von Plenarprotokollen
    points:
      2026: 0
      2025: 0
    citations:
      - text: 'keine maschinenlesbare Protokolle'
        link: https://www.bayern.landtag.de/webangebot3/views/protokolle/protokollsuche.xhtml
  - title: Aktualität von Plenarprotokollen
    points:
      2026: 1
      2025: 1
    citations:
      - text: 'Veröffentlichung innerhalb einer Woche'
        link: https://www.bayern.landtag.de/webangebot3/views/protokolle/protokollsuche.xhtml
stats:
  lastUpdate: 2026-01-15
  items:
    - text: Datensätze bei Govdata gesamt
      value: 22379
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20foaf%3A%20%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0ASELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%20%20(COUNT(DISTINCT%20%3Fname)%20AS%20%3Ftotal_unique_publishers)%0AWHERE%20%7B%0A%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%3Fdataset%20dct%3Apublisher%20%3Fpublisher%20.%0A%20%20%3Fpublisher%20foaf%3Aname%20%3Fname%20.%0A%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBayern%20.%0A%7D%0A&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze 2025 aktualisiert 
      value: 10308
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBayern%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%20.%0A%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze 2025 neu erstellt 
      value: 4387
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBayern%20.%0A%20%20%20%20%3Fdataset%20dct%3Aissued%20%3Fissued%20.%0A%20%20%20%20FILTER(YEAR(%3Fissued)%20%3D%202025)%20.%0A%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Hochwertige Datensätze 2025 aktualisiert 
      value: 63
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0APREFIX%20dcatap%3A%20%3Chttp%3A%2F%2Fdata.europa.eu%2Fr5r%2F%3E%0A%0ASELECT%20%0A%20%20%3Fcategory%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3FdatasetCount)%0A%20%20(%3FtotalCount%20AS%20%3FtotalDatasetCount)%0AWHERE%20%7B%0A%20%20%23%20Main%20query%20for%20per-category%20counts%0A%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBayern%20.%0A%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%20.%0A%20%20%3Fdataset%20dcatap%3AhvdCategory%20%3Fcategory%20.%0A%20%20%0A%20%20%23%20Subquery%20for%20total%20count%20across%20all%20categories%0A%20%20%7B%0A%20%20%20%20SELECT%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3FtotalCount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBayern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%20.%0A%20%20%20%20%20%20%3Fdataset%20dcatap%3AhvdCategory%20%3Fcategory%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0AGROUP%20BY%20%3Fcategory%20%3FtotalCount&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze 2025 aktualisiert in Formaten CSV/XML/JSON
      value: 1857
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithPDF)%20AS%20%3FdatasetsWithPDF)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithXLS)%20AS%20%3FdatasetsWithXLS)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithCSVXMLJSON)%20AS%20%3FdatasetsWithCSVXMLJSON)%0A%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBayern%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%20.%0A%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution1%20.%0A%20%20%20%20%20%20%3Fdistribution1%20dct%3Aformat%20%3Fformat%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22pdf%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithPDF)%0A%20%20%20%20%7D%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution1%20.%0A%20%20%20%20%20%20%3Fdistribution1%20dct%3Aformat%20%3Fformat%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22xls%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithXLS)%0A%20%20%20%20%7D%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution1%20.%0A%20%20%20%20%20%20%3Fdistribution1%20dct%3Aformat%20%3Fformat%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22csv%22)%7C%7C%20CONTAINS(LCASE(STR(%3Fformat))%2C%20%22xml%22)%20%7C%7C%20CONTAINS(LCASE(STR(%3Fformat))%2C%20%22json%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithCSVXMLJSON)%0A%20%20%20%20%7D%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze 2025 aktualisiert in GIS-Formaten (gml,geojson,shp,etc.)
      value: 240
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithGisdata)%20AS%20%3FdatasetsWithGisdata)%0A%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBayern%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%20.%0A%0A%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution1%20.%0A%20%20%20%20%20%20%3Fdistribution1%20dct%3Aformat%20%3Fformat%20.%0A%20%20%20%20FILTER((CONTAINS(LCASE(STR(%3Fformat))%2C%20%22geo%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22gml%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22gpx%22)%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22kml%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22gpkg%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22shp%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22shape%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22tiff%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22wfs%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22wms%22))%20))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithGisdata)%0A%20%20%20%20%7D%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze 2025 in Linked-Data-Formaten bereitgestellt
      value: 67
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithLD)%20AS%20%3FdatasetsWithLD)%0A%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBayern%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%20.%0A%0A%20%20%0A%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution1%20.%0A%20%20%20%20%20%20%3Fdistribution1%20dct%3Aformat%20%3Fformat%20.%0A%20%20%20%20FILTER((CONTAINS(LCASE(STR(%3Fformat))%2C%20%22rdf%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22turtle%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22n3%22)%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22jsonld%22))))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithLD)%0A%20%20%20%20%7D%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze mit dcat:politicalGeocodingURI 
      value: 1130
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20dcatde%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fdcatde%2F%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0ASELECT%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3FtotalDatasets)%0A%20%20(COUNT(DISTINCT%20%3FhasGeoURI)%20AS%20%3FwithPoliticalGeocodingURI)%0A%20%20(COUNT(DISTINCT%20%3FhasGeoLevel)%20AS%20%3FwithPoliticalGeocodingLevelURI)%0AWHERE%20%7B%0A%20%20%3Fdataset%20a%20dcat%3ADataset%20%3B%0A%20%20%20%20%20%20%20%20%20%20%20%3FcontributorIDpredicate%20contributor%3AopenDataBayern%20.%0A%0A%20%20OPTIONAL%20%7B%0A%20%20%20%20%3Fdataset%20dcatde%3ApoliticalGeocodingURI%20%3FgeoURI%20.%0A%20%20%20%20BIND(%3Fdataset%20AS%20%3FhasGeoURI)%0A%20%20%7D%0A%0A%20%20OPTIONAL%20%7B%0A%20%20%20%20%3Fdataset%20dcatde%3ApoliticalGeocodingLevelURI%20%3FgeoLevelURI%20.%0A%20%20%20%20BIND(%3Fdataset%20AS%20%3FhasGeoLevel)%0A%20%20%7D%0A%7D%0A&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=application%2Fn-triples%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze 2025 aktualisiert mit CC0-Lizenz
      value: 1828
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%0ASELECT%20%3Flabel%20%3Fcount%0AWHERE%20%7B%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(STR(%3FlicenseURI)%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%0A%20%20%20%20%20%20VALUES%20%3FlicenseURI%20%7B%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-sa%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nd%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nc%2F4.0%3E%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBayern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3FlicenseURI%20.%0A%20%20%20%20%7D%0A%20%20%20%20GROUP%20BY%20%3FlicenseURI%0A%20%20%7D%0A%0A%20%20UNION%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22SUM_CC_BY%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%0A%20%20%20%20%20%20VALUES%20%3FlicenseURI%20%7B%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-sa%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nd%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nc%2F4.0%3E%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBayern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3FlicenseURI%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20UNION%0A%20%20%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22http%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-zero%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBayern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-zero%3E%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20UNION%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22SUM_CC_ZERO%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBayern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-zero%3E%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20UNION%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22TOTAL_MODIFIED_DATASETS%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBayern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0AORDER%20BY%20%3Flabel%0A&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=application%2Fn-triples%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze 2025 aktualisiert mit CC-BY-4.0-Lizenz
      value: 8088
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%0ASELECT%20%3Flabel%20%3Fcount%0AWHERE%20%7B%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(STR(%3FlicenseURI)%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%0A%20%20%20%20%20%20VALUES%20%3FlicenseURI%20%7B%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-sa%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nd%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nc%2F4.0%3E%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBayern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3FlicenseURI%20.%0A%20%20%20%20%7D%0A%20%20%20%20GROUP%20BY%20%3FlicenseURI%0A%20%20%7D%0A%0A%20%20UNION%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22SUM_CC_BY%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%0A%20%20%20%20%20%20VALUES%20%3FlicenseURI%20%7B%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-sa%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nd%2F4.0%3E%0A%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-by-nc%2F4.0%3E%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBayern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3FlicenseURI%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20UNION%0A%20%20%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22http%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-zero%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBayern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-zero%3E%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20UNION%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22SUM_CC_ZERO%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBayern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdist%20.%0A%20%20%20%20%20%20%3Fdist%20dct%3Alicense%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2Fcc-zero%3E%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20UNION%0A%0A%20%20%7B%0A%20%20%20%20SELECT%0A%20%20%20%20%20%20(%22TOTAL_MODIFIED_DATASETS%22%20AS%20%3Flabel)%0A%20%20%20%20%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Fcount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBayern%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202025)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0AORDER%20BY%20%3Flabel%0A&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=application%2Fn-triples%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
---
Neben Niedersachsen ist Bayern das letzte Bundesland ohne Informationsfreiheitsgesetz. Auch für offene Daten sieht das BayDiG nur rudimentäre Regelungen vor. Davon unbeeindruckt hat sich in Bayern in den letzten Jahren ein kleines Open-Data-Ökosystem entwickelt. Mit open.bydata gibt es ein Open-Data-Portal, das mittlerweile in weiteren Bundesländern nachgenutzt wird. Auch das System, mit dem Kommunen eine eigene Präsenz auf dem Landesportal erhalten können, wurde von anderen Ländern übernommen. Darüber hinaus initiiert das open bydata competence center eigene Weiterentwicklungen und Anwendungsfälle wie die „Semantic Enrichment Engine” oder ein verbessertes Formular für die manuelle Erfassung von Metadaten.
