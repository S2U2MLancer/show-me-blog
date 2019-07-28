// const { defaults } = require('jest-config');
module.exports = {
    verbose: true,
    setupFiles: [
      './jest.setup.js',
    ],
    testRegex: '.+\\.test\\.(js|jsx|ts|tsx)$',
    collectCoverageFrom: [
        "src/{components,pages}/**/*.{js,jsx,ts,tsx}",
        "!<rootDir>/node_modules/",
        "!<rootDir>/build/",
        "!<rootDir>/coverage/"
    ],
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
    },
    moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/test/mocks/fileMock.js",
      "\\.(css|less|scss)$": "<rootDir>/src/test/mocks/styleMock.js"
    },
  };
  