// api/index.js
const serverless = require("serverless-http");
 const app = require("..");  // adjust path if server.js is inside /backend

module.exports = serverless(app);

