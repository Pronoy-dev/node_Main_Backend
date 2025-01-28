const { apiError } = require("../utils/ApiError");
const { apiResponse } = require("../utils/ApiResponse");
const categoryModel = require("../model/category.model");

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
  } catch (error) {
    return res
      .status(500)
      .json(
        new apiError(
          500,
          null,
          null,
          `create category controller error: ${error}`
        )
      );
  }
};

module.exports = { createCategory };
