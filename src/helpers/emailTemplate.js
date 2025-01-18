const emailTemplate = (firstName, otp) => {
  return `
<html lang="en">
<head>
   
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 20px auto;
            background-color: #fff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #4CAF50;
            color: white;
            text-align: center;
            padding: 20px;
        }
        .content {
            padding: 20px;
        }
        .content p {
            margin: 0 0 15px;
            line-height: 1.5;
        }
        .otp {
            font-size: 20px;
            font-weight: bold;
            text-align: center;
            margin: 20px 0;
            background-color: #f9f9f9;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .button {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            font-size: 16px;
        }
        .button:hover {
            background-color: #45a049;
        }
        .footer {
            text-align: center;
            padding: 10px;
            background-color: #f4f4f4;
            font-size: 14px;
            color: #777;
        }
        .footer a {
            color: #4CAF50;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Verify Your Email</h1>
        </div>
        <div class="content">
            <p>Hi ${firstName},</p>
            <p>Thank you for signing up! Please verify your email address to complete your registration.</p>
            <div class="otp">Your OTP Code: ${otp}</div>
            <p>Enter this OTP in the required field to verify your email.</p>
            <p>Click the button below to verify your email:</p>
            <a href="[Verification Link]" class="button">Verify Email</a>
            <p>If the button above doesn’t work, copy and paste the following link into your browser:</p>
            <p><a href="[Verification Link]">[Verification Link]</a></p>
            <p>Thank you,</p>
            <p>The [Your Company Name] Team</p>
        </div>
        <div class="footer">
            <p>If you did not sign up for this account, you can ignore this email or contact us at <a href="mailto:support@yourcompany.com">support@yourcompany.com</a>.</p>
            <p>&copy; 2025 [Your Company Name]. All rights reserved.</p>
        </div>
    </div>
</body>
</html>

`;
};

module.exports = { emailTemplate };
