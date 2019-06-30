module.exports = {
    parser: 'babel-eslint',
    extends: 'airbnb',
    env: {
        es6: true,
        browser: true
    },
    plugins: [
        'immutable',
        'import',
        "promise"
    ],
    overrides: [
      {
        files: [
          'jest.setup.spec.js',
          '**/*.test.{js,jsx}'
        ],
        env: {
          jest: true
        }
      }
    ]
}
