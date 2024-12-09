module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: [
    '<rootDir>/src/tests/jest.setup.ts',
    '@testing-library/jest-dom'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!.*\\.(mjs|jsx?))',
  ],
};
