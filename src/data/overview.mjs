import DefaultObj from '../utils/DefaultObj.mjs';
import serveVirtualFile from '../utils/serveVirtualFile.mjs';
import pointPercentage from '../utils/percentage.mjs';
import { getStates } from './states.mjs';
import { getCategories } from './categories.mjs';

async function overview() {
  const categories = await getCategories();
  const states = await getStates(false);

  const bars = new DefaultObj(() => ({ states: [] }));

  for (const { slug, color, description, maxPoints } of categories) {
    bars[slug].color = color;
    bars[slug].description = description;

    for (const state of states) {
      const { achievedPoints } = state.performance.find(
        ({ categorySlug }) => categorySlug === slug,
      );

      const percentage = pointPercentage(achievedPoints, maxPoints);

      bars[slug].states.push({
        state: { slug: state.slug, name: state.name, short: state.short },
        percentage,
      });
    }

    bars[slug].states.sort((a, b) => b.percentage - a.percentage);
  }

  const clean = { ...bars, toJSON: undefined };
  return clean;
}

export default serveVirtualFile('overview', overview);
