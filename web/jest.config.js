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
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
