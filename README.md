# OpenDataRanking.de

[![Build status](https://github.com/okfde/opendataranking.de/actions/workflows/build.yml/badge.svg)](https://github.com/okfde/opendataranking.de/actions/workflows/build.yml)

[OpenDataRanking.de](https://opendataranking.de) vergleicht die Verfügbarkeit
von Open Data in den Verwaltungen Deutschlands.

## Setup

```bash
npm install
npm run dev # start dev server
npm run build # build for production
```

## Content

Der Inhalt der Seite wird aus den YAML- und Markdowndateien unter
[`./src/data`](./src/data) generiert.

### Kategorien und Kriterien

Die [Kategorien](./src/data/categories.yml) bestehen aus `title`, `slug` (ein
URL-freundlicher, einmaliger Identifier), `color` (einer CSS-kompatiblen Farbe,
etwa `#fff`), einer Kurzbeschreibung (`description`) sowie eine Beschreibung der
Methodik (`methodology`).

Zu diesen Oberkategorien können die [Rankingkriterien](./src/data/criteria.yml)
angelegt werden. Diese bestehen ebenfalls aus `title` und `description`,
beinhalten zudem auch die Eigenschaft `maxPoints` (der für dieses Kriterium
maximal erreichbaren Punktzahl). Die übergeordnete Kategorie kann mit `category`
gesetzt werden. Dabei wird der `slug` einer aus der
[Kategoriedatei](./src/data/categories.yml) angegeben.

### Länder

Jedes Land hat unter [`./src/data/states`](./src/data/states) eine
Markdown-Datei (zum Beispiel `berlin.md`) sowie unter
[`./src/assets/img/wappen`](./src/assets/img/wappen) ein dazugehöriges Wappen im
svg-Format (ebenfalls gleicher Dateiname). In der Markdown-Datei kann eine
ausführliche Beschreibung zum Land formuliert werden, im Front-Matter
beinhaltet folgende Eigenschaften:

- `name`: Ländername, z.B. Berlin (String)
- `short`: Abkürzung des Landesnamen (ISO-3166-2), z.B. BE (String)
- `criteria`: Eine Liste von Kriterien (Objekt)
  - `title`: Kriterientitel, siehe [`criteria.yml`](./src/data/criteria.yml)
  - `points`: Erreichten Punkte (Zahl)
  - `citations`: Quellenangaben (Array):
    - `text`: Titel (String)
    - `link`: Optionaler Link (String)
  - `text`: Optionale Beschreibung (String)
- `stats`: Statistiken zum Land (Objekt)
  - `lastUpdate`: Datenstand (Datum: `2024-01-01`)
  - `items`: Die Statistiken (Array):
    - `text`: Label (String)
    - `value`: Wert (String/Zahl)
    - `link`: Optionaler Link (String)

## Lizenz

Der Code ist [MIT-lizensiert](./LICENSE), die Inhalte (alle `.yml` und `.md`
Dateien) fallen unter [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/).
