<template>
  <header
    id="header"
    class="p-4 md:px-8 bg-blue-50 border-b border-b-blue shadow">
    <div class="flex text-blue gap-y-5 justify-between">
      <router-link
        to="/"
        class="flex flex-col gap-5 items-start md:flex-row md:items-center">
        <img src="../assets/img/logo.svg" alt="Logo" class="w-14" />
        <h1 class="text-l font-bold md:text-xl">
          Open Data Ranking Deutschland
        </h1>
      </router-link>

      <router-link
        to="/laender/"
        title="Zur Übersicht von Bund und Ländern…"
        class="flex-shrink-0 md:hidden">
        <i-mdi-menu class="w-8 h-8" role="presentation" />
      </router-link>

      <div class="hidden flex-shrink-0 md:flex">
        <label for="jump-to" class="sr-only"
          >Direkt zu einer Seite springen</label
        >
        <select
          id="jump-to"
          ref="selectorEl"
          v-model="selector"
          class="bg-light text-sm px-4 py-2 border border-gray-300 rounded uppercase"
          @input="
            (e) =>
              $router.push(
                e.target.value === 'bund'
                  ? '/bund/'
                  : `/laender/${e.target.value}/`,
              )
          ">
          <option value="choose" disabled>Direkt zu…</option>
          <hr />
          <option value="bund">Bund</option>
          <hr />
          <template v-for="state in states" :key="state.name">
            <option v-if="state.slug !== 'bund'" :value="state.slug">
              {{ state.name }}
            </option>
          </template>
        </select>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue';
import states from '@data/states';

const selector = ref('choose');
const selectorEl = ref();

watch(selector, () => {
  selector.value = 'choose';
  selectorEl.value?.blur();

  if (selectorEl.value) {
    selectorEl.value.selectedIndex = 0;
  }
});
</script>
