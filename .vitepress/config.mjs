import fs from 'fs/promises';
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
import WatchData from '../src/utils/watchData.mjs';
import { getStates } from '../src/data/states.mjs';
import { getCategories } from '../src/data/categories.mjs';
import { renderStateImage } from '../src/utils/ogImage.mjs';

const root = path.resolve(import.meta.dirname, '..');
const siteUrl = 'https://opendataranking.de';

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
  sitemap: {
    hostname: siteUrl,
    transformItems: (items) => items.filter(({ url }) => url !== '404.html'),
  },
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Das Open Data Ranking' }],
    ['meta', { property: 'og:locale', content: 'de_DE' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ...(isProduction ? [['script', {}, matomo]] : []),
  ],
  transformHead({ pageData, title, description }) {
    const state = pageData.params?.data;

    if (pageData.isNotFound || pageData.relativePath === '404.md') {
      return [['meta', { name: 'robots', content: 'noindex' }]];
    }

    const url = `${siteUrl}/${pageData.relativePath.replace(/index\.md$/, '')}`;
    const image = state
      ? {
          url: `${siteUrl}/og/${state.slug}.png`,
          alt: `${state.slug === 'bund' ? 'Bundeswappen' : `Wappen von ${state.name}`} und Gesamtergebnis im Open Data Ranking`,
        }
      : {
          url: `${siteUrl}/social-preview.png`,
          alt: 'Das Open Data Ranking',
        };

    return [
      ['link', { rel: 'canonical', href: url }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:image', content: image.url }],
      ['meta', { property: 'og:image:width', content: '1200' }],
      ['meta', { property: 'og:image:height', content: '630' }],
      ['meta', { property: 'og:image:alt', content: image.alt }],
    ];
  },
  async buildEnd({ outDir }) {
    const { color } = (await getCategories()).find((c) => c.slug === 'gesamt');
    const states = await getStates();

    await fs.mkdir(path.join(outDir, 'og'), { recursive: true });
    await Promise.all(
      states.map(async ({ slug, name, performance }) =>
        fs.writeFile(
          path.join(outDir, 'og', `${slug}.png`),
          await renderStateImage({
            slug,
            name,
            percentage: performance[0].percentage,
            color,
          }),
        ),
      ),
    );
  },
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
      WatchData(),
    ],
  },
});
