<template>
  <div
    class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-12 gap-2 auto-rows-fr">
    <button
      v-for="(category, i) in categories"
      :key="i"
      class="text-left px-3 py-1 border border-blue border-l-8 rounded-sm bg-blue-50 text-sm shrink-0 hyphens-manual"
      :class="{
        'bg-blue-200 font-semibold': category.slug === selected,
        'hover:bg-gray-200 hover:underline': category.slug !== selected,
      }"
      :style="{ borderLeftColor: category.color }"
      :disabled="category.slug === selected"
      @click="selected = category.slug"
      v-html="category.title" />
  </div>

  <div
    v-if="selectedCategory.description"
    class="max-w-screen-md mb-12 mx-auto">
    <div class="grid gap-2" v-html="selectedCategory.description" />

    <p v-if="selectedCategory.slug !== 'gesamt'" class="mt-3">
      <router-link
        :to="`/methodik/#${selectedCategory.slug}`"
        class="inline-flex text-sm text-blue gap-1 group items-center">
        <span class="group-hover:underline underline-offset-4"
          >Mehr Informationen</span
        >
        <i-mdi-arrow-right role="presentation" />
      </router-link>
    </p>
  </div>

  <table
    class="max-w-screen-md mb-4 mx-auto w-full"
    role="table"
    :class="{ 'mt-20': !selectedCategory.description }">
    <transition-group tag="tbody" name="states">
      <tr
        v-for="bar in selectedCategory.states"
        :key="bar.state.name"
        class="table-row transition-all duration-700 ease-in-out relative"
        role="row">
        <th
          class="text-sm text-gray-700 flex items-center pr-4 font-normal pb-2"
          role="cell">
          <router-link
            :to="
              bar.state.slug === 'bund'
                ? '/bund/'
                : `/laender/${bar.state.slug}/`
            "
            :title="
              bar.state.slug === 'bund'
                ? 'Mehr Details zum Bund'
                : `Mehr Details zu ${bar.state.name}`
            "
            class="flex items-center group gap-1 text-right justify-end w-full">
            <span
              class="hidden md:inline whitespace-nowrap group-hover:underline underline-offset-4"
              >{{ bar.state.name }}</span
            >
            <span
              class="md:hidden whitespace-nowrap group-hover:underline underline-offset-4">
              {{ bar.state.short || bar.state.name }}
            </span>

            <i-mdi-information-outline role="presentation" />
          </router-link>
        </th>
        <td class="w-full mb-2 pb-2" role="cell">
          <ranking-bar
            :color="selectedCategory.color"
            :progress="bar.percentage" />
        </td>
      </tr>
    </transition-group>
  </table>
</template>

<script setup>
import { ref, computed } from 'vue';
import overview from '@data/overview';
import categories from '@data/categories';

const first = Object.values(categories)[0];
const selected = ref(first.slug);

const selectedCategory = computed(() => ({
  ...overview[selected.value],
  ...categories[selected.value],
}));
</script>
