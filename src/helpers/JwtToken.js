const jwt = require("jsonwebtoken");

const GenerateToken = async (payload) => {
  try {
    const token = await jwt.sign(payload, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_SECRET_EXPIRY,
    });
    return token;
  } catch (error) {
    console.log("Error from Generate token", error);
  }
};

module.exports = { GenerateToken };
