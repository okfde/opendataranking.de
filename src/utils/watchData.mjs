import path from 'path';

const dataDir = path.resolve(import.meta.dirname, '../data');

export default function () {
  return {
    name: 'watch-data',
    configureServer(server) {
      server.watcher.add(dataDir);
    },
    hotUpdate({ file, modules }) {
      if (!file.startsWith(dataDir)) {
        return;
      }

      const dataModules = [...this.environment.moduleGraph.idToModuleMap]
        .filter(([id]) => id.startsWith('@data/'))
        .map(([, mod]) => mod);

      return [...modules, ...dataModules];
    },
  };
}
