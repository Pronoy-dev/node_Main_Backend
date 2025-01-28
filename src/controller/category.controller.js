const { apiError } = require("../utils/ApiError");
const { apiResponse } = require("../utils/ApiResponse");
const categoryModel = require("../model/category.model");
const { uploadFileCloudinary } = require("../utils/cloudinary");

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    console.log(req.files.image[0]);
    if (!req.files) {
      return res
        .status(400)
        .json(new apiError(400, null, null, `Image missing !!`));
    }
    const { secure_url } = await uploadFileCloudinary(
      req.files?.image[0]?.path
    );

    // now save the image in the database
    const savedata = await new categoryModel({
      name,
      image: secure_url,
    }).save();

    if (savedata) {
      return res
        .status(500)
        .json(new apiError(500, null, `Category create successful`));
    }
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
