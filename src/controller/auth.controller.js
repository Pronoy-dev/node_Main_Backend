const { apiError } = require("../utils/ApiError");
const { apiResponse } = require("../utils/ApiResponse");

const registration = async (req, res) => {
  try {
    res
      .status(200)
      .json(new apiResponse(200, "registration succesful", null, false));
  } catch (error) {
    res
      .status(500)
      .json(
        new apiError(500, null, null, `Registration controller error: ${error}`)
      );
  }
};

module.exports = { registration };
