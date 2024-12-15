const express = require("express");
const _ = express.Router();

_.get("/api/v1/sh", (req, res) => {
  res.end("hello");
});

module.exports = _;
