const { version } = require("../../package.json");
const config = require("./config");

module.exports.swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Bebecook API documentation",
    version,
  },
  servers: [
    {
      url: `http://localhost:${config.port}/api`,
    },
  ],
};
