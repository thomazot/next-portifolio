module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/dist/'],
  collectCoverage: true,
  collectCoverageFrom: ['components/**/*.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
}