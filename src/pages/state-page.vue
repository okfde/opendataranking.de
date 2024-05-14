<template>
  <template v-if="state">
    <div class="flex mb-8 md:mb-12 lg:mb-16 items-center gap-4">
      <img
        :src="getImage(state.slug)"
        :alt="`Wappen von ${state.name}`"
        class="w-10 h-auto flex-shrink-0" />
      <h2 class="text-3xl md:text-5xl text-blue font-bold">
        {{ state.name }}
      </h2>
    </div>

    <div class="border border-blue rounded shadow-sm">
      <div class="p-3 md:p-6">
        <table class="w-full" role="table">
          <tr
            v-for="(bar, i) in performance"
            :key="bar.category.slug"
            class="flex flex-col md:table-row"
            role="row"
            scope="row">
            <th role="cell" class="font-normal">
              <span
                class="text-sm text-gray-700 text-right md:whitespace-nowrap pb-2 md:py-0 md:pr-4 flex md:min-h-8 md:items-center md:justify-end"
                :class="{ 'font-bold md:mb-4': i === 0, 'pt-4': i > 0 }">
                <router-link
                  v-if="i !== 0"
                  :to="`#${bar.category.slug}`"
                  :title="`Mehr Informationen zu ${bar.category.title}`"
                  class="inline-flex items-center group">
                  <span class="group-hover:underline underline-offset-4">{{
                    bar.category.title
                  }}</span>
                  <i-mdi-information-outline class="ml-1" role="presentation" />
                </router-link>
                <span v-else v-text="bar.category.title" />
              </span>
            </th>

            <td class="w-full" role="cell">
              <ranking-bar
                :color="bar.category.color"
                :progress="bar.percentage"
                :large="i === 0"
                :class="{ 'mb-2 md:mb-4': i === 0 }" />
            </td>
          </tr>
        </table>
      </div>

      <a
        :href="`https://transparenzranking.de/laender/${state.slug === 'nordrhein-westfalen' ? 'nrw' : state.slug}/`"
        target="_blank"
        class="group bg-blue-50 text-blue p-3 md:p-6 flex items-center justify-end gap-3 rounded-b">
        <span
          v-if="state.slug !== 'bund'"
          class="group-hover:underline underline-offset-4"
          >Wie hat {{ state.name }} im Transparenzranking abgeschnitten?</span
        >
        <span
          v-if="state.slug === 'bund'"
          class="group-hover:underline underline-offset-4"
          >Wie hat der Bund im Transparenzranking abgeschnitten?</span
        >
        <i-mdi-arrow-right role="presentation" />
      </a>
    </div>

    <div
      v-if="state.description"
      class="mt-8 md:mt-16 max-w-screen-md w-full mx-auto text-base md:text-lg flex flex-col gap-4"
      v-html="state.description" />

    <div class="mt-8 md:mt-16">
      <state-details v-if="state.criteria" :performance="performance" />
    </div>

    <state-stats
      v-if="state.stats"
      :stats="state.stats"
      class="mt-8 md:mt-16" />
  </template>
</template>

<script setup>
import { computed } from 'vue';
import { useHead } from '@unhead/vue';

import states from '@data/states';
import _categories from '@data/categories';

const categories = Object.values(_categories);

const props = defineProps({
  state: {
    type: String,
    required: true,
  },
});

function getCategory(categorySlug = 'gesamt') {
  return categories
    .map((c) => ({
      ...c,
      title: c.title.replace('&shy;', ''),
    }))
    .find((c) => c.slug === categorySlug);
}

function getImage(slug) {
  return new URL(`../assets/img/wappen/${slug}.svg`, import.meta.url).href;
}

const state = computed(() => states.find((s) => s.slug === props.state));

const performance = computed(() =>
  state.value.performance.map((p) => ({
    ...p,
    category: getCategory(p.categorySlug),
  })),
);

const title = `Open Data ${state.value.name === 'Bund' ? 'im Bund' : `in ${state.value.name}`} - Das Open Data Ranking`;
const description = `Wie hat ${state.value.name === 'Bund' ? 'der Bund' : state.value.name} im Open Data Ranking ab geschnitten?`;

useHead({ title, description });
</script>
