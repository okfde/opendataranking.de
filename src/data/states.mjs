import fs from 'fs/promises';
import path from 'path';
import loadYaml from '../utils/loadYaml.mjs';
import { fileURLToPath } from 'url';
import frontMatter from 'front-matter';
import serveVirtualFile from '../utils/serveVirtualFile.mjs';
import pointPercentage from '../utils/percentage.mjs';
import { getCategories } from './categories.mjs';
import markdown from '../utils/markdown.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const statesDir = path.join(__dirname, 'states');
const criteriaFile = path.join(__dirname, 'criteria.yml');

let idCounter = 0;

export async function getStates() {
  const categories = await getCategories();
  const criteria = await loadYaml(criteriaFile);

  const stateFiles = (await fs.readdir(statesDir))
    .filter((f) => f.endsWith('.md'))
    .map((file) => path.join(statesDir, file));

  const states = await Promise.all(
    stateFiles.map(async (file) => {
      const state = await fs.readFile(file, 'utf8');
      const { attributes, body } = frontMatter(state);
      const description = markdown(body);
      const text = attributes.text ? markdown(attributes.text, true) : null;
      const slug = path.basename(file, '.md');

      const performance = categories.map((category) => {
        const details = attributes.criteria
          ?.filter((c) => category.criteriaTitles.includes(c.title))
          .map((criterium) => {
            const { maxPoints, description } = criteria.find(
              (c) => c.title === criterium.title,
            );

            return {
              ...criterium,
              maxPoints,
              description: markdown(description, true),
              id: idCounter++,
            };
          });

        const achievedPoints = getPoints(attributes, category.criteriaTitles);
        const percentage = pointPercentage(achievedPoints, category.maxPoints);

        return {
          categorySlug: category.slug,
          details,
          achievedPoints,
          percentage,
        };
      });

      return {
        ...attributes,
        text,
        slug,
        description,
        performance,
      };
    }),
  );

  return states;
}

export function getPoints(state, criteriaTitles) {
  let achievedPoints = 0;

  if (state.criteria) {
    const stateCriteria = state.criteria.filter((c) =>
      criteriaTitles.includes(c.title),
    );

    achievedPoints = stateCriteria.reduce((a, c) => a + (c.points ?? 0), 0);
  }

  return achievedPoints;
}

export default serveVirtualFile('states', getStates);
