---
name: Brandenburg
short: BB
criteria:
  - title: Rechtsanspruch auf Open Data
    points: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Gesetzeslage
    points: 1
    citations:
      - text: 'BbgEGovG (2024 [2018])'
        link: https://bravors.brandenburg.de/gesetze/bbgegovg
    text: E-Government-Gesetz mit Open-Data-Einsprengseln
  - title: Evaluation
    points: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Behördendefinition
    points: 1
    citations:
      - text: '§4a Abs. 1 BbgEGovG'
        link: https://bravors.brandenburg.de/gesetze/bbgegovg#inh4a
    text: Behörden, aber nicht Gemeinden, Ämter und Gemeindeverbände
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
      - text: '§4a Abs. 1 BbgEGovG'
        link: https://bravors.brandenburg.de/gesetze/bbgegovg#inh4a
    text: Daten in elektronischer Form möglichst als offene Daten und maschinenlesbar
  - title: Aktualität
    points: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Dauerhaftigkeit
    points: 0
    citations:
      - text: 'keine Erwähnung'
  - title: Lizenz
    points: 1
    citations:
      - text: '§2 Abs. 6 BbgEGovG'
        link: https://bravors.brandenburg.de/gesetze/bbgegovg#2
    text: grundsätzlich unbeschränkte und diskriminierungsfreie Lizenzen
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
      - text: '§2 Abs. 6 BbgEGovG'
        link: https://bravors.brandenburg.de/gesetze/bbgegovg#2
  - title: Portal für Open Data
    points: 6
    citations:
      - text: 'datenadler (2018?)'
        link: https://datenadler.de/
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
    points: 4
    citations:
      - text: 'mehr als 25 Prozent des Datenbestands aktualisiert'
        link: https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBrandenburg%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202024)%20.%0A%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table
    text: Für den Vergleichszeitraum 2024 wurden 78,70% auf das Gesamtdatenvorkommen bezogen neu erstellt oder aktualisiert (7716 von 10696)
  - title: Linked Data
    points: 2
    citations:
      - text: 'es wurden Linked Data veröffentlicht'
        link: https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithLD)%20AS%20%3FdatasetsWithLD)%0A%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBrandenburg%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202024)%20.%0A%0A%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution1%20.%0A%20%20%20%20%20%20%3Fdistribution1%20dct%3Aformat%20%3Fformat%20.%0A%20%20%20%20FILTER((CONTAINS(LCASE(STR(%3Fformat))%2C%20%22rdf%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22turtle%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22n3%22)%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22jsonld%22))))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithLD)%0A%20%20%20%20%7D%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table
    text: Für den Vergleichszeitraum 2024 wurden 3,75% der neu erstellten Datensätze in einem Linked-Data-Format veröffentlicht (32 von 854)
  - title: Freie Lizenzen
    points: 4
    citations:
      - text: 'mehr als zwei Drittel der aktualisierten Daten steht unter freier Lizenz'
        link: https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithZeroLicense)%20AS%20%3FdatasetsWithZeroLicense)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithByLicense)%20AS%20%3FdatasetsWithByLicense)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithOWLicense)%20AS%20%3FdatasetsWithOWLicense)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithClosedLicense)%20AS%20%3FdatasetsWithClosedLicense)%0A%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBrandenburg%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202024)%20.%0A%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution2%20.%0A%20%20%20%20%20%20%3Fdistribution2%20dct%3Alicense%20%3Flicense%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Flicense))%2C%20%22zero%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithZeroLicense)%0A%20%20%20%20%7D%0A%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution2%20.%0A%20%20%20%20%20%20%3Fdistribution2%20dct%3Alicense%20%3Flicense%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Flicense))%2C%20%22by%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithByLicense)%0A%20%20%20%20%7D%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution%20.%0A%20%20%20%20%3Fdistribution%20dct%3Alicense%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2FofficialWork%3E%20.%0A%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithOWLicense)%0A%20%20%7D%0A%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution2%20.%0A%20%20%20%20%20%20%3Fdistribution2%20dct%3Alicense%20%3Flicense%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Flicense))%2C%20%22closed%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithClosedLicense)%0A%20%20%20%20%7D%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table
    text: Für den Vergleichszeitraum 2024 wurden 99,56% der aktualisierten oder neuen Datensätze mit Zero bzw. BY-Lizenz versehen oder waren lizenzfrei (7682 von 10696)
  - title: Hochwertige Datensätze
    points: 2
    citations:
      - text: 'es wurden HVD veröffentlicht'
        link: https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0APREFIX%20dcatap%3A%20%3Chttp%3A%2F%2Fdata.europa.eu%2Fr5r%2F%3E%0A%0ASELECT%20%0A%20%20%3Fcategory%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3FdatasetCount)%0A%20%20(%3FtotalCount%20AS%20%3FtotalDatasetCount)%0AWHERE%20%7B%0A%20%20%23%20Main%20query%20for%20per-category%20counts%0A%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBrandenburg%20.%0A%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20FILTER(YEAR(%3Fmodified)%20%3D%202024)%20.%0A%20%20%3Fdataset%20dcatap%3AhvdCategory%20%3Fcategory%20.%0A%20%20%0A%20%20%23%20Subquery%20for%20total%20count%20across%20all%20categories%0A%20%20%7B%0A%20%20%20%20SELECT%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3FtotalCount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBrandenburg%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202024)%20.%0A%20%20%20%20%20%20%3Fdataset%20dcatap%3AhvdCategory%20%3Fcategory%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0AGROUP%20BY%20%3Fcategory%20%3FtotalCount&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table
    text: Für den Vergleichszeitraum 2024 gab es 449 Hochwertige Datensätze aus 3 verschiedenen Kategorien, auf dem Landesportal werden HVD nicht extra deklariert  
  - title: Open-Data-Beauftragte
    points: 0
    citations:
      - text: 'nicht vorhanden'
  - title: Open-Data-Beratungsstelle
    points: 2
    citations:
      - text: '§4a Abs. 3 BbgEGovG'
        link: https://bravors.brandenburg.de/gesetze/bbgegovg#inh4a
      - text: 'Informations- und Beratungsstelle'
        link: https://www.digital-agentur.de/schwerpunkte/open-data/
    text: Informations- und Beratungsstelle durch die Digitalagentur Brandenburg
  - title: Open-Data-Labore
    points: 0
    citations:
      - text: 'nicht vorhanden'
  - title: Unterstützungsangebote für Kommunen
    points: 0
    citations:
      - text: 'nicht vorhanden'
  - title: Öffentlichkeitsarbeit
    points: 0
    citations:
      - text: 'nicht vorhanden'
  - title: API/Schnittstelle
    points: 0
    citations:
      - text: 'keine API'
        link: https://www.parlamentsdokumentation.brandenburg.de/portal/browse.tt.html
  - title: Maschinenlesbarkeit von Plenarprotokollen
    points: 0
    citations:
      - text: 'keine maschinenlesbare Protokolle'
        link: https://www.parlamentsdokumentation.brandenburg.de/portal/browse.tt.html
  - title: Aktualität von Plenarprotokollen
    points: 0
    citations:
      - text: 'Veröffentlichung dauert länger als eine Woche'
        link: https://www.parlamentsdokumentation.brandenburg.de/portal/browse.tt.html
stats:
  lastUpdate: 2025-01-15
  items:
    - text: Datensätze bei GovData gesamt
      value: 10696
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20foaf%3A%20%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0ASELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%20%20(COUNT(DISTINCT%20%3Fname)%20AS%20%3Ftotal_unique_publishers)%0AWHERE%20%7B%0A%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%3Fdataset%20dct%3Apublisher%20%3Fpublisher%20.%0A%20%20%3Fpublisher%20foaf%3Aname%20%3Fname%20.%0A%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBrandenburg%20.%0A%7D%0A&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze 2024 aktualisiert gesamt
      value: 7716
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBrandenburg%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202024)%20.%0A%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze 2024 neu erstellt gesamt
      value: 854
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBrandenburg%20.%0A%20%20%20%20%3Fdataset%20dct%3Aissued%20%3Fissued%20.%0A%20%20%20%20FILTER(YEAR(%3Fissued)%20%3D%202024)%20.%0A%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Hochwertige Datensätze 2024 aktualisiert gesamt
      value: 449
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0APREFIX%20dcatap%3A%20%3Chttp%3A%2F%2Fdata.europa.eu%2Fr5r%2F%3E%0A%0ASELECT%20%0A%20%20%3Fcategory%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3FdatasetCount)%0A%20%20(%3FtotalCount%20AS%20%3FtotalDatasetCount)%0AWHERE%20%7B%0A%20%20%23%20Main%20query%20for%20per-category%20counts%0A%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBrandenburg%20.%0A%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20FILTER(YEAR(%3Fmodified)%20%3D%202024)%20.%0A%20%20%3Fdataset%20dcatap%3AhvdCategory%20%3Fcategory%20.%0A%20%20%0A%20%20%23%20Subquery%20for%20total%20count%20across%20all%20categories%0A%20%20%7B%0A%20%20%20%20SELECT%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3FtotalCount)%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBrandenburg%20.%0A%20%20%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202024)%20.%0A%20%20%20%20%20%20%3Fdataset%20dcatap%3AhvdCategory%20%3Fcategory%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0AGROUP%20BY%20%3Fcategory%20%3FtotalCount&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze 2024 aktualisiert in Formaten CSV/XML/JSON
      value: 33
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithPDF)%20AS%20%3FdatasetsWithPDF)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithXLS)%20AS%20%3FdatasetsWithXLS)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithCSVXMLJSON)%20AS%20%3FdatasetsWithCSVXMLJSON)%0A%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBrandenburg%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202024)%20.%0A%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution1%20.%0A%20%20%20%20%20%20%3Fdistribution1%20dct%3Aformat%20%3Fformat%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22pdf%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithPDF)%0A%20%20%20%20%7D%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution1%20.%0A%20%20%20%20%20%20%3Fdistribution1%20dct%3Aformat%20%3Fformat%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22xls%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithXLS)%0A%20%20%20%20%7D%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution1%20.%0A%20%20%20%20%20%20%3Fdistribution1%20dct%3Aformat%20%3Fformat%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22csv%22)%7C%7C%20CONTAINS(LCASE(STR(%3Fformat))%2C%20%22xml%22)%20%7C%7C%20CONTAINS(LCASE(STR(%3Fformat))%2C%20%22json%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithCSVXMLJSON)%0A%20%20%20%20%7D%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze 2024 in Linked-Data-Formaten bereitgestellt
      value: 32
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithLD)%20AS%20%3FdatasetsWithLD)%0A%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBrandenburg%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202024)%20.%0A%0A%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution1%20.%0A%20%20%20%20%20%20%3Fdistribution1%20dct%3Aformat%20%3Fformat%20.%0A%20%20%20%20FILTER((CONTAINS(LCASE(STR(%3Fformat))%2C%20%22rdf%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22turtle%22))%20%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22n3%22)%7C%7C%20(CONTAINS(LCASE(STR(%3Fformat))%2C%20%22jsonld%22))))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithLD)%0A%20%20%20%20%7D%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze 2024 aktualisiert mit Zero-Lizenz oder lizenzfrei
      value: 18
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithZeroLicense)%20AS%20%3FdatasetsWithZeroLicense)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithByLicense)%20AS%20%3FdatasetsWithByLicense)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithOWLicense)%20AS%20%3FdatasetsWithOWLicense)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithClosedLicense)%20AS%20%3FdatasetsWithClosedLicense)%0A%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBrandenburg%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202024)%20.%0A%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution2%20.%0A%20%20%20%20%20%20%3Fdistribution2%20dct%3Alicense%20%3Flicense%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Flicense))%2C%20%22zero%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithZeroLicense)%0A%20%20%20%20%7D%0A%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution2%20.%0A%20%20%20%20%20%20%3Fdistribution2%20dct%3Alicense%20%3Flicense%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Flicense))%2C%20%22by%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithByLicense)%0A%20%20%20%20%7D%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution%20.%0A%20%20%20%20%3Fdistribution%20dct%3Alicense%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2FofficialWork%3E%20.%0A%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithOWLicense)%0A%20%20%7D%0A%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution2%20.%0A%20%20%20%20%20%20%3Fdistribution2%20dct%3Alicense%20%3Flicense%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Flicense))%2C%20%22closed%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithClosedLicense)%0A%20%20%20%20%7D%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
    - text: Datensätze 2024 aktualisiert mit BY-Lizenz
      value: 7764
      link: 'https://www.govdata.de/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithZeroLicense)%20AS%20%3FdatasetsWithZeroLicense)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithByLicense)%20AS%20%3FdatasetsWithByLicense)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithOWLicense)%20AS%20%3FdatasetsWithOWLicense)%0A%20%20(COUNT(DISTINCT%20%3FdatasetWithClosedLicense)%20AS%20%3FdatasetsWithClosedLicense)%0A%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AopenDataBrandenburg%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202024)%20.%0A%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution2%20.%0A%20%20%20%20%20%20%3Fdistribution2%20dct%3Alicense%20%3Flicense%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Flicense))%2C%20%22zero%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithZeroLicense)%0A%20%20%20%20%7D%0A%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution2%20.%0A%20%20%20%20%20%20%3Fdistribution2%20dct%3Alicense%20%3Flicense%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Flicense))%2C%20%22by%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithByLicense)%0A%20%20%20%20%7D%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution%20.%0A%20%20%20%20%3Fdistribution%20dct%3Alicense%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Flicenses%2FofficialWork%3E%20.%0A%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithOWLicense)%0A%20%20%7D%0A%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fdataset%20dcat%3Adistribution%20%3Fdistribution2%20.%0A%20%20%20%20%20%20%3Fdistribution2%20dct%3Alicense%20%3Flicense%20.%0A%20%20%20%20%20%20FILTER(CONTAINS(LCASE(STR(%3Flicense))%2C%20%22closed%22))%0A%20%20%20%20%20%20BIND(%3Fdataset%20AS%20%3FdatasetWithClosedLicense)%0A%20%20%20%20%7D%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table'
---
Das Land Brandenburg hat einen der größten Sprünge im Ranking gemacht. Ausschlaggebend dafür ist die aktive Datenbereitstellung über GovData. Bei der weiteren Bereitstellung soll auch die Informations- und Beratungsstelle für Open Data unterstüzten, die ab 2025 die Arbeit aufnimmt. Ebenfalls für 2025 geplant ist ein Relaunch des Landesportals Datenadler, das erfreulicherweise das bayerische Open-ByData als Vorlage nutzt.
Grundlage für die Einrichtung der Open-Data-Stelle im Land ist das aktualisierte E-Government-Gesetz, das zwar neuerdings Open Data erwähnt, ansonsten aber vieles vermissen lässt. Ursprünglich war ein eigenes Open-Data-Gesetz angekündigt. Welche Pläne die neue Regierung in Potsdam hegt, ist noch nicht abzusehen. Im Koalitionsvertrag wird zumindest die Weiterentwicklung der bestehenden Infrastrukturen und Prozesse für die Nutzung offener Daten durch die Landes- und Kommunalverwaltungen angekündigt.
