const express = require("express");
const { createCategory } = require("../controller/category.controller");
const _ = express.Router();

_.route("/category").post(createCategory);

module.exports = _;
