<template>
  <h1 class="text-3xl md:text-5xl mb-16 text-blue font-bold">
    Was braucht es für Open Data?
  </h1>

  <div class="max-w-screen-md w-full mx-auto md:text-lg">
    <h2 class="text-xl md:text-3xl mt-12 mb-4 text-blue font-bold">
      Unsere Kriterien
    </h2>

    <p>
      Mit 25% der Gesamtpunktzahl wurde dem Rechtsanspruch auf Open Data ein
      großer Teil des Rankings gewidmet. Hintergrund ist, dass selbst bei
      bestehenden rechtlichen Pflichten zur Veröffentlichung zum Beispiel auf
      Bundesebene über den §12a des E-Government-Gesetzes, in der Praxis dieser
      Pflicht nicht nachgekommen wird. Der weitere Rechtsrahmen, sei es über ein
      eigenes Gesetz, einen Paragraphen im E-Government-Gesetz oder eine
      Verrechtlichung von Open Data in einem Transparenzgesetz sollte möglichst
      wenig pauschale Ausnahmebestände enthalten und gegen Unterlaufen und
      Aufweichung geschützt formuliert sein. Der Status quo von verfügbaren Open
      Data wird mit insgesamt 30% bewertet - hier gilt der Fokus der möglichst
      automatisierten Datenbereitstellung und einem aktuellen, offenem und
      qualitativ hochwertigen Datenstand. Unter Ausstattung wird vor allem auf
      die vorhandene institutionalisierte Datenkultur geblickt, so dass Daten
      nicht nur händisch für Dritte bereitgestellt werden, sondern auch der
      eigene Nutzen offener Daten erfasst wird. Die Dokumentation des
      parlamentarischen Geschehens in den Bundesländern wird in der letzten
      Kategorie explizit untersucht, weil die Veröffentlichung diese wichtigen
      Daten teilweise zu wünschen übrig lässt.
    </p>

    <p class="mt-4">
      Gemeinsam ergeben die Bewertungen für die verschiedenen Bereiche die
      mögliche Höchstpunktzahl von 100.
    </p>

    <template v-for="category in categories" :key="category.slug">
      <template v-if="category.methodology">
        <h2
          :id="category.slug"
          class="text-xl md:text-3xl mt-12 mb-4 text-blue font-bold">
          <span v-html="category.title" /> ({{ category.maxPoints }}
          Punkte)
        </h2>

        <div v-html="category.methodology" />
      </template>
    </template>
  </div>
</template>

<script setup>
import categories from '@data/categories';
</script>
