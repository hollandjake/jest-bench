import config from "./jest.config";

export default {
  ...config,
  testEnvironmentOptions: {
    testEnvironment: "jest-environment-node",
  },
};
