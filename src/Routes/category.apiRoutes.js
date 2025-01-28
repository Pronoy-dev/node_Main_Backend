const express = require("express");
const { createCategory } = require("../controller/category.controller");
const { upload } = require("../middleware/multer.middleware");
const _ = express.Router();

_.route("/category").post(
  upload.fields([{ name: "image", maxCount: 1 }]),
  createCategory
);

module.exports = _;
