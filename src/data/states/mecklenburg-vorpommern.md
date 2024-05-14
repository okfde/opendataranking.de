---
name: Mecklenburg-Vorpommern
short: MV
criteria:
  - title: Rechtsanspruch auf Open Data
    points: 0
  - title: Gesetzeslage
    points: 0
    citations:
      - text: 'EGovG M-V (2020[2016])'
        link: https://www.landesrecht-mv.de/bsmv/document/jlr-EGovGMVV3P2%22%20/t%20%22_blank
    text: E-Government-Gesetz ohne Open Data
  - title: Evaluation
    points: 0
  - title: Behördendefinition
    points: 0
  - title: Anstalten, Körperschaften, Unternehmen
    points: 0
  - title: Forschungsdaten
    points: 0
  - title: Ausnahmen
    points: 0
  - title: Pauschale Ausschlusskriterien
    points: 0
  - title: Datenkatalog
    points: 0
  - title: Rohdaten
    points: 0
  - title: Daten im Auftrag von Dritten
    points: 0
  - title: Offenheit
    points: 0
  - title: Maschinenlesbarkeit
    points: 1
    citations:
      - text: '§8 Abs. 1 EGovG M-V'
        link: https://www.landesrecht-mv.de/bsmv/document/jlr-EGovGMVpP8
    text: Falls öffentlich verfügbar dann auch maschinenlesbar, besonders falls es ein Weiterverwendungsinteresse gibt (DNG)
  - title: Aktualität
    points: 0
  - title: Dauerhaftigkeit
    points: 0
  - title: Lizenz
    points: 0
  - title: Schnittstellen
    points: 0
  - title: Diskriminierungsfreiheit
    points: 0
  - title: Kostenfreiheit
    points: 0
  - title: Portal für Open Data
    points: 0
    citations:
      - text: 'nicht vorhanden'
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
        link: https://www.govdata.de/web/guest/sparql-assistent#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20dcat%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23%3E%0APREFIX%20contributor%3A%20%3Chttp%3A%2F%2Fdcat-ap.de%2Fdef%2Fcontributors%2F%3E%0A%0A%20SELECT%20%0A%20%20(COUNT(DISTINCT%20%3Fdataset)%20AS%20%3Ftotal_datasets)%0A%0A%20%20WHERE%20%7B%0A%20%20%20%20%3Fdataset%20a%20dcat%3ADataset%20.%0A%20%20%20%20%3Fdataset%20%3FcontributorIDpredicate%20contributor%3AmecklenburgVorpommern%20.%0A%20%20%20%20%3Fdataset%20dct%3Amodified%20%3Fmodified%20.%0A%20%20%20%20FILTER(YEAR(%3Fmodified)%20%3D%202023)%20.%0A%0A%20%7D&endpoint=https%3A%2F%2Fwww.govdata.de%2Fsparql&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table
    text: Für den Vergleichszeitraum 2023 wurden keine Datensätze neu erstellt oder aktualisiert
  - title: Linked Data
    points: 0
    citations:
      - text: 'keine Linked Data'
  - title: Freie Lizenzen
    points: 0
    citations:
      - text: 'weniger als die Hälfte der aktualisierten Daten Zero oder BY-lizensiert'
  - title: Open-Data-Beauftragte
    points: 0
  - title: Open-Data-Beratungsstelle
    points: 0
  - title: Open-Data-Labore
    points: 0
  - title: Unterstützungsangebote für Kommunen
    points: 0
  - title: Öffentlichkeitsarbeit
    points: 0
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
    text: In der letzten Legislaturperiode lagen im Median 117 Tage zwischen Sitzung und Veröffentlichung
stats:
  lastUpdate: 2024-03-15
  items:
    - text: Datensätze bei govdata gesamt
      value: 0
    - text: Datensätze aktualisiert in 2023 gesamt
      value: 0
    - text: Datensätze aktualisiert in 2023 in Format CSV/XML/JSON
      value: 0
    - text: Datensätze in 2023 im Linked-Data-Format bereitgestellt
      value: 0
    - text: Datensätze aktualisiert in 2023 mit Zero-Lizenz
      value: 0
    - text: Datensätze aktualisiert in 2023 mit BY-Lizenz
      value: 0
---
