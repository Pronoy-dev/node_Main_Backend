const bcrypt = require("bcrypt");
const makeHashPassword = async (plainPassword) => {
  try {
    const encryptedPassword = await bcrypt.hash(plainPassword, 10);
    return encryptedPassword;
  } catch (error) {
    console.log("Error from makeHashPassword method", error);
  }
};

const compareHashPassword = async (PlaintextPassword, hash) => {
  return await bcrypt.compare(PlaintextPassword, hash);
};

module.exports = { makeHashPassword, compareHashPassword };
