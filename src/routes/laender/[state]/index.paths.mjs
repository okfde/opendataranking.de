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
    const { slug, name, performance } = pageData.params.data;
    const isBund = slug === 'bund';

    pageData.title = `Open Data ${isBund ? 'im Bund' : `in ${name}`} – Das Open Data Ranking`;
    pageData.description = `${isBund ? 'Der Bund' : name} erreicht im Open Data Ranking ${performance[0].percentage} % der möglichen Punkte. Wie steht es um Rechtsrahmen, Datenportal, Datenrealität und Ausstattung für Open Data ${isBund ? 'im Bund' : `in ${name}`}?`;
  },
};
