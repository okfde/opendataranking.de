import '@fontsource/hanken-grotesk/latin-400.css';
import '@fontsource/hanken-grotesk/latin-600.css';
import '@fontsource/hanken-grotesk/latin-700.css';
import './main.css';
import { ViteSSG } from 'vite-ssg';

import App from './App.vue';
import Index from './pages/index-page.vue';
import State from './pages/state-page.vue';
import States from './pages/states-page.vue';
import Methodology from './pages/methodology-page.vue';
import NotFound from './pages/not-found-page.vue';
import states from '@data/states';

const routes = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/laender/',
    component: States,
  },
  {
    path: '/methodik/',
    component: Methodology,
  },
  ...states.map((s) => ({
    path: s.slug === 'bund' ? '/bund/' : `/laender/${s.slug}/`,
    component: State,
    props: { state: s.slug },
  })),
  { path: '/:pathMatch(.*)*', component: NotFound },
  { path: '/404', component: NotFound }, // for gh pages
];

export const createApp = ViteSSG(App, {
  routes,
  scrollBehavior(to, from, savedPosition) {
    const behavior = 'smooth';
    const toTop = savedPosition
      ? { ...savedPosition, behavior }
      : { top: 0, behavior };

    if (!to.hash) return toTop;

    const header = document.querySelector('#header').offsetHeight;

    const getScrollPosition = () => ({
      top: document.querySelector(to.hash)?.offsetTop - header - 24,
      behavior,
    });

    if (to.path === from.path) return getScrollPosition();

    return new Promise((resolve) =>
      setTimeout(() => resolve(getScrollPosition()), 500),
    );
  },
});
