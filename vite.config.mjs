import path from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Legacy from '@vitejs/plugin-legacy';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';

import Overview from './src/data/overview.mjs';
import States from './src/data/states.mjs';
import Categories from './src/data/categories.mjs';
import RankingMap from './src/data/map.mjs';

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Legacy({ targets: ['defaults', 'IE 11'] }),
    Components({
      extensions: ['vue', 'js'],
      resolvers: [IconsResolver()],
    }),
    Icons({
      compiler: 'vue3',
    }),
    Overview(),
    States(),
    Categories(),
    RankingMap(),
  ],
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    entry: './src/main.mjs',
  },
  optimizeDeps: {
    include: ['vue', 'vue-router'],
  },
});
