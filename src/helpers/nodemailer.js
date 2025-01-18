const nodemailer = require("nodemailer");
const { emailTemplate } = require("./emailTemplate");

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  auth: {
    user: process.env.HOST_MAIL,
    pass: process.env.APP_PASSWORD,
  },
});

const SendMail = async (firstName, otp, email) => {
  const info = await transporter.sendMail({
    from: "Pronoy-dev",
    to: `${email}`,
    subject: "verification mail",
    html: emailTemplate(firstName, otp),
  });

  return info.messageId;
};

module.exports = { SendMail };
