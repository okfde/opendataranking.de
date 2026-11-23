import path from 'path';
import { fileURLToPath } from 'url';
import serveVirtualFile from '../utils/serveVirtualFile.mjs';
import loadYaml from '../utils/loadYaml.mjs';
import markdown from '../utils/markdown.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const criteriaFile = path.join(__dirname, 'criteria.yml');

export default serveVirtualFile('criteria', async () =>
  (await loadYaml(criteriaFile)).reduce((obj, { title, description }) => {
    obj[title] = markdown(description, true);
    return obj;
  }, {}),
);
