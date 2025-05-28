import { XMLParser, XMLBuilder } from 'fast-xml-parser';
import chroma from 'chroma-js';
import { optimize } from 'svgo';
import fs from 'fs/promises';
import path from 'path';
import { getStates } from './states.mjs';
import { compileTemplate } from '@vue/compiler-sfc';

const MAP = path.join(__dirname, 'map.svg');
let handle;

const scale = chroma.scale(['#99afac', '#335f59', '#07423a']).domain([0, 100]);

async function renderSvg() {
  const states = await getStates(false);
  const parser = new XMLParser({ ignoreAttributes: false });
  const builder = new XMLBuilder({ ignoreAttributes: false });
  const map = parser.parse(await fs.readFile(MAP, { encoding: 'utf-8' }));

  for (const state of states) {
    const el = map.svg.g.path.find((p) => p['@_id'] === state.slug);

    if (el) {
      el['@_fill'] = scale(state.performance[0].percentage).hex();
    }
  }

  const { data } = optimize(builder.build(map), {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
            cleanupIds: false,
          },
        },
      },
    ],
  });

  return data;
}

export default function () {
  const virtualFileId = '@data/map';

  return {
    name: 'virtual-map',
    resolveId(id) {
      if (id.startsWith(virtualFileId)) {
        return id;
      }
    },
    async configureServer(server) {
      const svg = await renderSvg();
      server.middlewares.use((req, res, next) => {
        if (req.url === `/${virtualFileId}`) {
          res.setHeader('Content-Type', 'image/svg+xml');
          return res.end(svg, 'utf-8');
        }
        next();
      });
    },
    async load(id) {
      if (id.startsWith(virtualFileId)) {
        const svg = await renderSvg();

        if (id.endsWith('?component')) {
          const { code } = compileTemplate({
            id: JSON.stringify(id),
            source: svg,
            transformAssetUrls: false,
          });

          return `${code}\nexport default render`;
        }

        if (this.meta.watchMode) {
          return `const data = '/${virtualFileId}'; export default data;`;
        }

        handle = this.emitFile({
          name: 'map.svg',
          source: svg,
          type: 'asset',
        });
        return `export default import.meta.ROLLUP_FILE_URL_${handle};`;
      }
    },
  };
}
