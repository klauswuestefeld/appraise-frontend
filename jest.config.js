module.exports = {
  setupFiles: ['./tests/browserMocks.js'],
  automock: false,
  verbose: true,
  coverageReporters: ['json', 'lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
}
