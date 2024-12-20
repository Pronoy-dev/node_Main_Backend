const { apiError } = require("../utils/ApiError");
const { apiResponse } = require("../utils/ApiResponse");
const {
  emailChecker,
  passwordChecker,
  phoneNumberChecker,
} = require("../utils/checker");

const registration = async (req, res) => {
  try {
    const { firstName, email, phoneNumber, adress1, password } = req.body;
    if (!firstName || !email || !phoneNumber || !adress1 || !password) {
      return res
        .status(401)
        .json(new apiError(401, null, null, `User error Credential Missing`));
    }

    if (
      !emailChecker(email) ||
      !passwordChecker(password) ||
      !phoneNumberChecker(phoneNumber)
    ) {
      return res
        .status(401)
        .json(
          new apiError(
            401,
            null,
            null,
            `User email or password or phoneNumber  format invalid`
          )
        );
    }

    return res
      .status(200)
      .json(new apiResponse(200, "registration succesful", null, false));
  } catch (error) {
    return res
      .status(500)
      .json(
        new apiError(500, null, null, `Registration controller error: ${error}`)
      );
  }
};

module.exports = { registration };
