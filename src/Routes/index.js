const express = require("express");
const _ = express.Router();
const allRoutes = require("./auth.apiRoutes");
const categoryRoutes = require("./category.apiRoutes");
const { apiError } = require("../utils/ApiError");
_.use("/api/v1/auth", allRoutes);
_.use("/api/v1", categoryRoutes);
_.use("*", (req, res) => {
  return res.status(500).json(new apiError(500, null, null, `Invalid route`));
});
module.exports = _;
