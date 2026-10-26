import path from 'path';
import { defineConfig } from 'vitepress';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Tailwindcss from '@tailwindcss/vite';

import Overview from '../src/data/overview.mjs';
import States from '../src/data/states.mjs';
import Categories from '../src/data/categories.mjs';
import Criteria from '../src/data/criteria.mjs';
import RankingMap from '../src/data/map.mjs';

const root = path.resolve(import.meta.dirname, '..');

const title = 'Open Data in Deutschland – Das Open Data Ranking';
const description =
  'Im Rahmen der allgegenwärtigen Digitalisierung der Verwaltungen steht das Thema Open Data schon seit mehr als einer Dekade im Raum - wir haben den Stand von Open Data in Bund und Ländern verglichen, um eine Diskussionsgrundlage jenseits des reinen Zählens von verfügbaren Datensätzen zu schaffen.';

const isProduction = process.env.NODE_ENV === 'production';

const matomo = `
var _paq = _paq || [];
// tracker methods like "setCustomDimension" should be called before "trackPageView"
_paq.push(['trackPageView']);
_paq.push(['disableCookies']);
_paq.push(['enableLinkTracking']);
(function () {
  var u = '//traffic.okfn.de/';
  _paq.push(['setTrackerUrl', u + 'piwik.php']);
  _paq.push(['setSiteId', '31']);
  var d = document,
    g = d.createElement('script'),
    s = d.getElementsByTagName('script')[0];
  g.type = 'text/javascript';
  g.async = true;
  g.defer = true;
  g.src = u + 'piwik.js';
  s.parentNode.insertBefore(g, s);
})();
`;

export default defineConfig({
  lang: 'de',
  title,
  titleTemplate: ':title',
  description,
  srcDir: 'src/routes',
  outDir: 'dist',
  rewrites: {
    'laender/bund/index.md': 'bund/index.md',
  },
  head: [
    ['meta', { name: 'msapplication-TileColor', content: '#00aba9' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { property: 'og:image', content: '/social-preview.png' }],
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ...(isProduction ? [['script', {}, matomo]] : []),
  ],
  vite: {
    publicDir: path.join(root, 'public'),
    resolve: {
      alias: {
        '~/': `${path.join(root, 'src')}/`,
      },
    },
    plugins: [
      Tailwindcss(),
      Components({
        dirs: [path.join(root, 'src/components')],
        extensions: ['vue', 'js'],
        resolvers: [IconsResolver()],
      }),
      Icons({
        compiler: 'vue3',
      }),
      Overview(),
      States(),
      Categories(),
      Criteria(),
      RankingMap(),
    ],
  },
});
