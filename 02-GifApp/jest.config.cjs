const path = require("path");

module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFiles: [path.resolve(__dirname, "./jest.setup.js")],
};
