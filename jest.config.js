const config = {
  preset: "ts-jest", // tells Jest to use ts-jest for TypeScript files
  testEnvironment: "jest-environment-jsdom", // simulates a browser-like environment
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // fake styles during tests
    "^@/(.*)$": "<rootDir>/src/$1", // optional: allows using @/components instead of ../../
    "\\.svg$": "<rootDir>/__mocks__/svgMock.js",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // file to set up testing environment
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest", // Use ts-jest to process ts and tsx files, tells Jest how to process .ts/.tsx files
      {
        tsconfig: "./tsconfig.app.json", // Explicitly point to your tsconfig file
      },
    ],
  },
  testPathIgnorePatterns: ["/node_modules/", "/dist/"], // ignore these folders when looking for tests
};

export default config;
