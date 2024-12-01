module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy', 
      '^@/(.*)$': '<rootDir>/src/$1', 
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], 
    testMatch: [
      '<rootDir>/src/**/*.(spec|test).(ts|tsx)',
    ],
  };