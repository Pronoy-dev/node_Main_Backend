const express = require("express");
const app = express();
const allRoutes = require("./src/Routes/index.js");

app.use(allRoutes);

module.exports = { app };
