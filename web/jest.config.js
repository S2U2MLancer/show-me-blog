// const { defaults } = require('jest-config');
module.exports = {
  verbose: true,
  setupFiles: [
    './jest.setup.spec.js',
  ],
  testRegex: '.+\\.test\\.(js|jsx)$',
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    // '!src/**/*.test.{js,jsx}',
    // '!**/coverage/**',
    // '!**/dist/**',
    // '!**/store.js',
    // '!**/provider.jsx',
    // '!**/index.js',
    // '!**/webpack.config.js',
  ],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
};
