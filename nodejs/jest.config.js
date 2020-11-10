const path = require('path');

module.exports = {
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [2345]
      }
    }
  },
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '/__tests__/.*spec.tsx?$',
  testEnvironment: 'node',
  reporters: ['default', [ 'jest-junit', { outputDirectory: path.join(__dirname, '/coverage/nodejs') } ]],
  collectCoverage: true,
  coverageDirectory: '/coverage/nodejs',
  coverageReporters: ['json', 'html', 'lcov', 'text-summary', 'clover'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/server.ts',
    '!node_modules/**',
    '!dist/**'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
