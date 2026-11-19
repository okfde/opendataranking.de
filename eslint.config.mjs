import pluginVue from 'eslint-plugin-vue';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  ...pluginVue.configs['flat/recommended'],
  {
    ignores: ['node_modules', 'dist', '.vscode', 'public', '.vitepress/cache'],
  },
  {
    rules: {
      'vue/no-v-html': 'off',
    },
  },
  eslintPluginPrettierRecommended,
];
