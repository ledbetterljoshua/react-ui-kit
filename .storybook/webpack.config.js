const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.

  defaultConfig.resolve.alias['grid-ui'] = path.resolve(__dirname, '../src/components'),
  defaultConfig.resolve.alias['config'] = path.resolve(__dirname, '../config'),
  defaultConfig.resolve.alias['enzyme_wrapped'] = path.resolve(__dirname, '../src/wrappedLibs/enzyme.js'),
  defaultConfig.resolve.alias['storybook-custom-plugins'] = path.resolve(__dirname, '../storybook-custom-plugins')

  return defaultConfig;
};