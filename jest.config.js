module.exports = {
  preset: "jest-playwright-preset",
  testMatch: [
    "**/__tests__/**/*.+(ts|js|tsx|jsx)",
    "**/?(*.)+(spec|test).+(ts|js|tsx|jsx)",
  ],
  transform: {
    "^.+\\.(ts|js|tsx|jsx)$": "ts-jest",
  },
  globalSetup: "<rootDir>/test-utils/global-setup.ts",
  globalTeardown: "<rootDir>/test-utils/global-teardown.ts",
  testEnvironmentOptions: {
    "jest-playwright": {
      // Options...
      browsers: ["chromium", "webkit"],
    },
  },
};
