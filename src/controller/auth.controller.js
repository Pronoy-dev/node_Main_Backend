const { apiError } = require("../utils/ApiError");
const { apiResponse } = require("../utils/ApiResponse");
const { userModel } = require("../model/user.model");
const {
  emailChecker,
  passwordChecker,
  phoneNumberChecker,
} = require("../utils/checker");
const { otpGenerator } = require("../helpers/OtpGenerator");
const { SendMail } = require("../helpers/nodemailer");
const { makeHashPassword, compareHashPassword } = require("../helpers/bcrypt");

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

    // Check isAlready Exist user in database
    const isAlreadyExistuser = await userModel.find({
      $or: [
        { firstName: firstName },
        { email: email },
        { phoneNumber: phoneNumber },
      ],
    });
    if (isAlreadyExistuser.length) {
      return res
        .status(401)
        .json(new apiError(401, null, null, `User already exist`));
    }
    const hashPassword = await makeHashPassword(password);

    // now save the userInfo into database
    const saveUserInfo = await userModel.create({
      firstName,
      email,
      phoneNumber,
      adress1,
      password: hashPassword,
      ...(lastName && { lastName }),
      ...(adress2 && { adress2: adress2 }),
    });

    // make a otp
    const otp = await otpGenerator();
    // Send a verification Mail
    const messageId = await SendMail(firstName, otp, email);
    if (messageId) {
      console.log(messageId);

      const updatedUser = await userModel
        .findOneAndUpdate({ email: email }, { otp: otp }, { new: true })
        .select("-email -phoneNumber -password -role -createdAt -otp");
      return res
        .status(200)
        .json(
          new apiResponse(200, "registration succesful", updatedUser, false)
        );
    }
  } catch (error) {
    return res
      .status(500)
      .json(
        new apiError(500, null, null, `Registration controller error: ${error}`)
      );
  }
};

// ==Login controlller

const login = async (req, res) => {
  try {
    const { emailOrphoneNumber, password } = req.body;
    if (!emailOrphoneNumber || !password) {
      return res
        .status(400)
        .json(new apiError(400, null, null, `Email or password invalid`));
    }

    // Check email / phone number is correct or not

    const checkisRegisteredUser = await userModel.findOne({
      $or: [{ email: emailOrphoneNumber }, { phoneNumber: emailOrphoneNumber }],
    });
    if (checkisRegisteredUser) {
      const passwordIsCorrect = await compareHashPassword(
        password,
        checkisRegisteredUser.password
      );
      if (!passwordIsCorrect) {
        return res
          .status(400)
          .json(new apiError(400, null, null, `Password doesn't match`));
      }
      return res
        .status(500)
        .json(new apiError(500, null, null, `Login successful`));
    }
    console.log(checkisRegisteredUser);
  } catch (error) {
    return res
      .status(500)
      .json(new apiError(500, null, null, `Login controller error: ${error}`));
  }
};

module.exports = { registration, login };
