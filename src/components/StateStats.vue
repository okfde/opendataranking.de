<template>
  <div>
    <h2 class="text-gray-500">
      Statistiken
      <span v-if="stats.lastUpdate"
        >(Stand: <span v-text="formatDate(stats.lastUpdate)" />)</span
      >
    </h2>

    <div class="grid md:grid-cols-2 gap-3 mt-3">
      <template v-for="(item, i) in stats.items" :key="i">
        <a
          v-if="item.link"
          :href="item.link"
          target="_blank"
          class="flex border border-blue text-blue rounded p-4 shadow-sm items-center group hover:bg-blue-50 gap-8">
          <h3
            class="text-lg flex-1 group-hover:underline underline-offset-4"
            v-text="item.text" />
          <span
            class="pl-2 text-2xl font-serif font-semibold"
            v-text="item.value" />
        </a>
        <div
          v-else
          class="flex border border-blue text-blue rounded p-4 shadow-sm items-center gap-8">
          <h3 class="text-lg flex-1" v-text="item.text" />
          <span
            class="pl-2 text-2xl font-serif font-semibold"
            v-text="item.value" />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
defineProps({
  stats: {
    type: Object,
    default() {
      return {
        lastUpdate: null,
        items: [],
      };
    },
  },
});

function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('default', { dateStyle: 'long' }).format(date);
}
</script>
