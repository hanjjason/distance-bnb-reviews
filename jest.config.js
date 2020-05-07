// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'json', 'jsx'],
  setupFilesAfterEnv: ['jest-enzyme'],
  testEnvironment: 'enzyme',
  testEnvironmentOptions: {
    'enzymeAdapter': 'react16'
  },
  testURL: 'http://localhost:3001/5/',
  transform: {
    "^.+\\.jsx$": "babel-jest"
  },
};
