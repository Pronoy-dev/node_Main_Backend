const emailChecker = (email) => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return emailRegex.test(email.toLowerCase());
};
const passwordChecker = (password) => {
  const passwordRegex =
    /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{8,96}$/gmu;

  return passwordRegex.test(password);
};
const phoneNumberChecker = (phoneNumber) => {
  const phoneNumberRegex = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;

  return phoneNumberRegex.test(phoneNumber);
};

module.exports = { emailChecker, passwordChecker, phoneNumberChecker };
