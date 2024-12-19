const express = require("express");
const _ = express.Router();
const allRoutes = require("./auth.apiRoutes");
_.use("/api/v1/auth", allRoutes);
module.exports = _;
