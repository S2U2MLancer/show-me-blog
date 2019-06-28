// const { defaults } = require('jest-config');
module.exports = {
  verbose: true,
  testResultsProcessor: 'jest-sonar-reporter',
  setupFiles: [
    './src/jest.setup.js',
  ],
  testRegex: '.+\\.test\\.(js|jsx)$',
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/coverage/**',
    '!**/dist/**',
    '!**/store.js',
    '!**/provider.jsx',
    '!**/index.js',
    '!**/webpack.config.js',
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
