import fs from 'fs/promises';
import path from 'path';
import { createRequire } from 'module';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

const require = createRequire(import.meta.url);
const wappenDir = path.resolve(import.meta.dirname, '../assets/img/wappen');
const fontDir = path.join(
  path.dirname(require.resolve('@fontsource/hanken-grotesk/package.json')),
  'files',
);

const width = 1200;
const height = 630;

const blue = '#43388c';
const border = 12;
const padding = 96;
const wappenWidth = 260;
const gap = 72;
const textWidth = width - 2 * (border + padding) - wappenWidth - gap;
const percentageWidth = 150;

let fonts;

async function loadFonts() {
  fonts ??= await Promise.all(
    [400, 700].map(async (weight) => ({
      name: 'Hanken Grotesk',
      weight,
      style: 'normal',
      data: await fs.readFile(
        path.join(fontDir, `hanken-grotesk-latin-${weight}-normal.woff`),
      ),
    })),
  );

  return fonts;
}

// Fit the coat of arms into the given box, keeping its aspect ratio.
async function loadWappen(slug, maxWidth, maxHeight) {
  const svg = await fs.readFile(path.join(wappenDir, `${slug}.svg`), 'utf8');
  const root = svg.match(/<svg[^>]*>/)[0];
  const viewBox = root.match(/viewBox="([^"]+)"/)?.[1].split(/[\s,]+/);
  const ratio = viewBox
    ? Number(viewBox[2]) / Number(viewBox[3])
    : parseFloat(root.match(/width="([^"]+)"/)[1]) /
      parseFloat(root.match(/height="([^"]+)"/)[1]);
  const scale = Math.min(maxWidth / ratio, maxHeight);

  return {
    src: `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`,
    width: Math.round(scale * ratio),
    height: Math.round(scale),
  };
}

const el = (type, style, children) => ({ type, props: { style, children } });

export async function renderStateImage({ slug, name, percentage, color }) {
  const wappen = await loadWappen(slug, wappenWidth, 360);

  const tree = el(
    'div',
    {
      width,
      height,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      gap,
      padding: `0 ${padding}px`,
      backgroundColor: '#f6f5f9',
      border: `${border}px solid ${blue}`,
      fontFamily: 'Hanken Grotesk',
      color: blue,
    },
    [
      el(
        'div',
        { display: 'flex', width: wappenWidth, justifyContent: 'center' },
        [{ type: 'img', props: wappen }],
      ),
      el(
        'div',
        { display: 'flex', flexDirection: 'column', width: textWidth },
        [
          el('div', { fontSize: 36, color: '#4b5563' }, 'Open Data Ranking'),
          el(
            'div',
            {
              fontSize: name.length > 14 ? 52 : 84,
              fontWeight: 700,
              lineHeight: 1.1,
              marginTop: 8,
            },
            name,
          ),
          el('div', { display: 'flex', alignItems: 'center', marginTop: 40 }, [
            el(
              'div',
              {
                display: 'flex',
                width: textWidth - percentageWidth,
                height: 44,
                backgroundColor: '#d1d5db',
              },
              [el('div', { width: `${percentage}%`, backgroundColor: color })],
            ),
            el(
              'div',
              {
                display: 'flex',
                width: percentageWidth,
                paddingLeft: 24,
                fontSize: 44,
                fontWeight: 700,
              },
              `${percentage} %`,
            ),
          ]),
        ],
      ),
    ],
  );

  const svg = await satori(tree, { width, height, fonts: await loadFonts() });

  return new Resvg(svg, { fitTo: { mode: 'width', value: width } })
    .render()
    .asPng();
}
