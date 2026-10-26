import { getStates } from '../../../data/states.mjs';

export default {
  watch: ['../../../data/**/*.{md,yml}'],
  async paths() {
    const states = await getStates();

    return states.map(({ criteria, ...data }) => ({
      params: { state: data.slug, data },
    }));
  },
  transformPageData(pageData) {
    const { slug, name } = pageData.params.data;
    const isBund = slug === 'bund';

    pageData.title = `Open Data ${isBund ? 'im Bund' : `in ${name}`} - Das Open Data Ranking`;
    pageData.description = `Wie hat ${isBund ? 'der Bund' : name} im Open Data Ranking ab geschnitten?`;
  },
};
