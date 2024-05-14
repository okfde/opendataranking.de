import path from 'path';
import { fileURLToPath } from 'url';
import serveVirtualFile from '../utils/serveVirtualFile.mjs';
import loadYaml from '../utils/loadYaml.mjs';
import markdown from '../utils/markdown.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const categoriesFile = path.join(__dirname, 'categories.yml');
const criteriaFile = path.join(__dirname, 'criteria.yml');

export async function getCategories() {
  const categories = await loadYaml(categoriesFile);
  const criteria = await loadYaml(criteriaFile);

  return categories.map(({ title, slug, color, description, methodology }) => {
    const correspondingCriteria = criteria.filter(
      (c) => c.category === slug || title === 'Gesamt',
    );
    const criteriaTitles = correspondingCriteria.map((c) => c.title);
    const maxPoints = correspondingCriteria.reduce(
      (a, c) => a + c.maxPoints,
      0,
    );

    return {
      title,
      slug,
      criteriaTitles,
      maxPoints,
      color,
      description: description ? markdown(description) : null,
      methodology: methodology ? markdown(methodology) : null,
    };
  });
}

// map array to obj
export default serveVirtualFile('categories', async () =>
  (await getCategories()).reduce((obj, category) => {
    obj[category.slug] = category;
    return obj;
  }, {}),
);
