<template>
  <template
    v-for="({ category, achievedPoints, details }, i) in performance"
    :key="category.slug">
    <div
      v-if="category.slug !== 'gesamt'"
      :id="category.slug"
      class="border border-blue rounded p-3 md:p-6 shadow-sm"
      :class="{ 'mt-8': i > 0 }">
      <h3 class="flex flex-col mb-3 text-l md:text-xl gap-x-3 md:flex-row">
        <span class="font-semibold text-blue">
          {{ category.title }}
        </span>

        <span class="text-gray-500">
          {{ achievedPoints }} von {{ category.maxPoints }} Punkten
        </span>
      </h3>

      <div
        v-for="(detail, ii) in details"
        :key="ii"
        :class="{ 'mb-1': ii + 1 < details.length }">
        <div class="flex gap-x-10 flex-col md:flex-row">
          <button
            class="flex group flex-shrink-0 w-100 gap-x-2 content-start text-left text-blue hover:text-gray-900"
            @click="toggle(detail)">
            <i-mdi-chevron-down
              class="transform transition-transform duration-150 ease text-xl flex-shrink-0"
              :class="{ '-rotate-180': visible(detail) }"
              role="presentation" />

            <div class="flex flex-col gap-x-2 md:flex-row">
              <span
                class="underline underline-offset-4 group-hover:decoration-transparent flex-shrink-0"
                :class="{ 'font-bold': visible(detail) }">
                {{ detail.title }}
              </span>

              <span class="text-gray-500">
                {{ detail.points }} von {{ detail.maxPoints }}
                <span class="sr-only">Punkten</span>
              </span>
            </div>
          </button>

          <div
            class="ml-8 md:ml-auto justify-end py-1 md:max-w-[50%] text-balance md:text-right">
            <div
              v-for="(_, iii) in Array(detail.maxPoints)"
              :key="iii"
              class="inline">
              <div
                class="inline-block bg-gray-400 h-4 w-4 rounded mr-1 md:mr-0 md:ml-1"
                :style="{
                  backgroundColor:
                    iii < detail.points ? category.color : undefined,
                }" />
            </div>
          </div>
        </div>

        <div
          class="ps-2 pt-2 pb-4 text-sm"
          :class="{ block: visible(detail), hidden: !visible(detail) }">
          <div class="border-s-8 ps-4">
            <p
              v-if="detail.citations && detail.citations.length > 0"
              class="mb-2">
              <strong v-if="detail.citations.length > 1">Quellen: </strong>
              <strong v-if="detail.citations.length === 1">Quelle: </strong>
              <template
                v-for="(citation, index) in detail.citations"
                :key="index">
                <a
                  v-if="citation.link"
                  :href="citation.link"
                  class="underline underline-offset-4 hover:decoration-transparent"
                  target="_blank"
                  v-text="citation.text" />
                <template v-else>
                  {{ citation.text }}
                </template>
                <template v-if="index + 1 < detail.citations.length">
                  ,
                </template>
              </template>
            </p>

            <p v-if="detail.text" class="mb-2">
              <strong>Details: </strong>
              <span v-html="detail.text" />
            </p>

            <p>
              <strong>Kriterienbeschreibung: </strong>
              <span v-html="detail.description" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  performance: {
    type: Array,
    default() {
      return [];
    },
  },
});

const visibleDetails = ref([]);

function visible({ id }) {
  return visibleDetails.value.includes(id);
}

function toggle({ id }) {
  const index = visibleDetails.value.indexOf(id);

  if (index === -1) {
    visibleDetails.value.push(id);
  } else {
    visibleDetails.value.splice(index, 1);
  }
}
</script>
