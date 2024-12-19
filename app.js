const express = require("express");
const app = express();
const allRoutes = require("./src/Routes/index.js");
app.use(express.json());
app.use(allRoutes);

module.exports = { app };
