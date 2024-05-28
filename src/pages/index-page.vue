<template>
  <div class="max-w-screen-md w-full mx-auto md:text-lg text-gray-900">
    <p>
      Behörden von Bundes- bis Kommunalebene produzieren jeden Tag riesige
      Mengen an Daten. Doch verhältnismäßig wenige Informationen werden unter
      freien Lizenzen in offenen und maschinenlesbaren Formaten automatisiert
      bereitgestellt. Im Rahmen der allgegenwärtigen Digitalisierung der
      Verwaltungen wird die Notwendigkeit, Daten offen zur Verfügung zu stellen
      schon seit mehr als einer Dekade angemahnt - die Umsetzung läuft aber nur
      schleppend. Wir haben den Stand von Open Data in Bund und Ländern
      verglichen, um eine Diskussionsgrundlage jenseits des reinen Zählens von
      Datensätzen zu schaffen.
    </p>

    <p class="mt-4">
      Klicken Sie auf ein Bundesland oder eine Rankingkategorie, um mehr zu
      erfahren.
    </p>

    <p class="mt-4">
      Die Kriterien für die Erstellung des Rankings können
      <router-link
        to="/methodik/"
        class="underline underline-offset-4 hover:decoration-transparent text-blue hover:text-gray-900"
        >hier</router-link
      >
      eingesehen werden.
    </p>
  </div>

  <hr class="my-8 md:my-12 lg:my-16 border-blue shadow break-out" />

  <ranking-overview />

  <hr class="my-8 md:my-12 lg:my-16 border-blue shadow break-out" />

  <div
    class="max-w-screen-md w-full mx-auto md:text-lg text-gray-900 my-8 md:my-12 lg:my-16">
    <p>
      Im Bereich Open Data gibt es große Unterschiede innerhalb Deutschlands.
      Einige Bundesländer haben das Thema nicht einmal im Rechtsrahmen
      verankert, andere kümmern sich bereits um Linked Open Data direkt aus den
      Fachverfahren.
    </p>

    <p class="mt-4">
      Die Öffnung des eigenen Datenstands durch die Verwaltungen wird bisher oft
      als Maßnahme für Dritte aus Zivilgesellschaft oder Wirtschaft verstanden.
      Dieses Nutzungspotenzial ist zwar wichtig, aber Behörden sollten primär
      auch selbst von der Modernisierung der für Open Data notwendigen
      technischen Infrastruktur profitieren. Zudem ist die Verwaltung oft die
      größte Nutznießerin offener Daten: Der Zugriff auf Informationen anderer
      Abteilungen im eigenen Haus vereinfacht viele Arbeiten im Behördenalltag.
    </p>
  </div>

  <ranking-map class="max-w-screen-md mx-auto" />
</template>
