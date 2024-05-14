<template>
  <ranking-map ref="map" class="map w-full h-auto" />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import rankingMap from '@data/map?component';
import '@data/map';

const router = useRouter();
const map = ref(null);

onMounted(() => {
  for (const node of map.value.querySelectorAll('path[id]')) {
    const slug = node.id;
    node.addEventListener('click', () =>
      router.push(slug === 'bund' ? '/bund/' : `/laender/${slug}/`),
    );
  }
});
</script>

<style lang="postcss" scoped>
.map {
  @apply w-full pointer-events-auto;

  &:deep() path[id] {
    @apply cursor-pointer transition-opacity;
  }

  &:deep() g:hover > path[id] {
    @apply opacity-25;
  }

  &:deep() g:hover > path[id]:hover {
    @apply opacity-100;
  }
}
</style>
