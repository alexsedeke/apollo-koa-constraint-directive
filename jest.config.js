module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  coverageReporters: [
    'text',
    'lcov',
    'html',
    'json',
  ],
  moduleFileExtensions: [
    'js',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
};
