const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  auth: {
    user: process.env.HOST_MAIL,
    pass: process.env.APP_PASSWORD,
  },
});

const SendMail = async () => {
  const info = await transporter.sendMail({
    from: "Pronoy-dev",
    to: "propronoy2@gmail.com",
    subject: "verification mail",
    html: `<h1>Hello</h1>
        <button>Click</button>
        `,
  });

  console.log("Message sent: %s", info.messageId);
};

module.exports = { SendMail };
