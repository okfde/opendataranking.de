<template>
  <site-header />

  <div class="text-lg mx-4 md:mx-8 my-8 md:my-12 lg:my-16">
    <div class="max-w-5xl mx-auto">
      <Content :key="route.path" />
    </div>
  </div>

  <site-footer />
</template>

<script setup>
import { useRoute } from 'vitepress';

const route = useRoute();
</script>
