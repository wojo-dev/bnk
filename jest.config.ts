import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: '.',
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  moduleNameMapper: {
    '^@/assets/(.*)$': '<rootDir>/assets/$1',
    '^@/tokens/(.*)$': '<rootDir>/src/features/shared/styles/tokens/$1',
    '^@/ui/(.*)$': '<rootDir>/src/features/shared/components/ui/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/features/shared/hooks/$1',
    '^@/utils/(.*)$': '<rootDir>/src/features/shared/utils/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

export default config;
