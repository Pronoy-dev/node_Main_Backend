const { apiError } = require("../utils/ApiError");
const { apiResponse } = require("../utils/ApiResponse");
const { userModel } = require("../model/user.model");
const {
  emailChecker,
  passwordChecker,
  phoneNumberChecker,
} = require("../utils/checker");

const registration = async (req, res) => {
  try {
    const {
      firstName,
      email,
      phoneNumber,
      adress1,
      password,
      lastName,
      adress2,
    } = req.body;
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
    // now save the userInfo into database
    const saveUserInfo = await userModel.create({
      firstName,
      email,
      phoneNumber,
      adress1,
      password,
      ...(lastName && { lastName }),
    });

    return res
      .status(200)
      .json(
        new apiResponse(200, "registration succesful", saveUserInfo, false)
      );
  } catch (error) {
    return res
      .status(500)
      .json(
        new apiError(500, null, null, `Registration controller error: ${error}`)
      );
  }
};

module.exports = { registration };
