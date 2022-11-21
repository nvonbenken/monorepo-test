const coreLibraries = new Set(['react', 'react-dom', 'react-router-dom']);

module.exports = {
  name: 'shell',
  remotes: ['app1', 'app2'],
  shared: (libraryName, defaultConfig) => {
    if (coreLibraries.has(libraryName)) {
      return defaultConfig;
    }

    // Returning false means the library is not shared.
    return false;
  },
};
