// This is the configuration file for Jest.
// Read more:
// https://jestjs.io/docs/en/configuration

module.exports = {
  collectCoverageFrom: [
    'src/**/*.{ts,js,jsx}'
  ],
  moduleNameMapper: {
    // Mocking style imports for Jest (do nothing).
    // This will allow Jest not to crash on CSS imports.
    '\\.css$': '<rootDir>/.jest/mocks/styleMock.js'
  }
}
