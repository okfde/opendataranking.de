<template>
  <footer
    class="bg-blue-900 text-white text-light px-4 md:px-8 pt-12 pb-8 mx-auto shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px]">
    <div class="max-w-screen-lg mx-auto">
      <h2 class="w-full text-3xl mb-8 font-semibold">
        Über das Open Data Ranking
      </h2>

      <div class="grid md:grid-cols-2 gap-x-16 gap-y-8">
        <div>
          <h3 class="text-xl font-semibold mb-3">Die Erhebung</h3>

          <p>
            Im Rahmen der allgegenwärtigen Digitalisierung der Verwaltungen
            steht das Thema Open Data schon seit mehr als einer Dekade im Raum -
            wir haben den Stand von Open Data in Bund und Ländern für das Jahr 2023 verglichen,
            um eine Diskussionsgrundlage zum Umsetzungsstand jenseits des reinen
            Zählens der verfügbaren Datensätze zu schaffen.
          </p>
        </div>

        <div>
          <h3 class="text-xl font-semibold mb-3">Das Projekt</h3>

          <p class="mb-6">
            Das Open Data Ranking ist ein Projekt der Open Knowledge Foundation
            Deutschland e.V.
          </p>

          <div class="flex items-center gap-3">
            <a href="https://okfn.de" target="_blank">
              <img
                class="mr-6 h-auto object-contain max-h-24"
                src="../assets/img/okfde.svg"
                alt="Open Knowledge Foundation Deutschland e.V." />
            </a>

            <a href="https://okfn.de/projekte/opendata/" target="_blank">
              <img
                class="object-contain max-h-24"
                src="../assets/img/open-data.svg"
                alt="Offene Verwaltungsdaten" />
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-xl font-semibold mb-3">Downloads</h3>
          <!--<p class="mb-1">
            <a href="/static/files/ifg-ranking.pdf" class="inline-flex items-center group">
              <i-mdi-file-pdf-outline class="mr-1" role="presentation" />
              <span class="underline underline-offset-4 hover:decoration-transparent">Die Broschüre zum Ranking</span>
            </a>
          </p>-->
          <p class="mb-1">
            <a href="./OpenDataRanking2024_Dataset.zip" class="inline-flex items-center group">
              <i-mdi-code-json class="mr-1" role="presentation" />
              <span class="underline underline-offset-4 hover:decoration-transparent">Datensatz als JSON</span>
            </a>
          </p>
          <p>
            <a
              href="https://github.com/okfde/opendataranking.de"
              class="inline-flex items-center group">
              <i-mdi-github class="mr-1" role="presentation" />
              <span
                class="underline underline-offset-4 hover:decoration-transparent"
                >Quellcode</span
              >
            </a>
          </p>
        </div>

        <div>
          <h3 class="text-xl font-semibold mb-3">Copyright</h3>
          <p>
            Dieses Werk und die Daten sind lizenziert unter Creative Commons
            Namensnennung 4.0 International (<a
              href="https://creativecommons.org/licenses/by/4.0/"
              class="underline underline-offset-4 hover:decoration-transparent"
              rel="licence"
              >CC BY 4.0</a
            >).
          </p>
        </div>

        <div>
          <h3 class="text-xl font-semibold mb-3">Kontakt</h3>

          <p>
            Wir freuen uns sehr über Feedback, Kritik und Fragen. Kontaktieren
            Sie uns bitte unter
            <a
              href="mailto:opendata@okfn.de"
              class="underline underline-offset-4 hover:decoration-transparent"
              >opendata@okfn.de</a
            >.
          </p>
        </div>

        <div>
          <h3 class="text-xl font-semibold mb-3">Impressum</h3>
          <p class="mb-3">
            Verantwortlicher Diensteanbieter für diese Homepage ist das Projekt
            Offene Verwaltungsdaten der Open Knowledge Foundation Deutschland.
          </p>

          <p>
            <a
              href="https://okfn.de/impressum/"
              class="underline underline-offset-4 hover:decoration-transparent"
              >Impressum & Datenschutz</a
            >
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
