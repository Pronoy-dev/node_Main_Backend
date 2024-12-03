const express = require("express");
const route = express.Router();

route.get("/sh", (req, res) => {
  res.end("hello");
});

module.exports = route;
