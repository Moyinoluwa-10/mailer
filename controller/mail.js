const nodemailer = require("nodemailer");
require("dotenv").config();
const { ContactEmail } = require("../templates/email.js");
const { render } = require("@react-email/components");

const sendMail = async (req, res, next) => {
  try {
    let { name, firstName, lastName, email, message } = req.body;
    if (!name) {
      name = firstName + " " + lastName;
    }

    if (!name || !email || !message) {
      return res.status(400).json({
        status: false,
        message: "Please fill all the fields",
      });
    }

    // Set up the nodemailer transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: false,
      // host: "smtp.forwardemail.net",
      // port: 465,
      // secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    const emailHtml = render(ContactEmail({ firstName: firstName }));

    // Set up the email options
    const mailOptions = {
      from: process.env.USER,
      to: email,
      subject: "Thank You for Reaching Out!",
      html: emailHtml,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(500).json({ status: false, message: "Email not sent" });
        console.log(error);
      } else {
        res.json({ status: true, message: "Email sent successfully" });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendMail,
};
