<template>
  <site-header />

  <div class="mx-4 md:mx-8 my-8 md:my-12 lg:my-16">
    <div class="max-w-screen-lg mx-auto">
      <router-view :key="$route.path" />
    </div>
  </div>

  <site-footer />
</template>

<script setup>
import { useHead } from '@unhead/vue';
import socialPreview from './assets/img/social-preview.png';
import favicon from './assets/img/favicon.png';

const title = 'Open Data in Deutschland – Das Open Data Ranking';
const description =
  'Im Rahmen der allgegenwärtigen Digitalisierung der Verwaltungen steht das Thema Open Data schon seit mehr als einer Dekade im Raum - wir haben den Stand von Open Data in Bund und Ländern verglichen, um eine Diskussionsgrundlage jenseits des reinen Zählens von verfügbaren Datensätzen zu schaffen.';

useHead({
  title,
  description,
  meta: [
    { property: 'og:image', content: socialPreview },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'twitter:card', content: 'summary_large_image' },
  ],
  link: [
    {
      rel: 'icon',
      href: favicon,
    },
  ],
});
</script>
