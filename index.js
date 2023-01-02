const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Set up the nodemailer transport
  const transporter = nodemailer.createTransport({
    // service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "moyinadelowo@gmail.com",
      pass: "pmenaxrfoiakfghr",
    },
  });

  // Set up the email options
  const mailOptions = {
    from: "moyinadelowo@gmail.com",
    to: "moyinadelowo@gmail.com",
    subject: `New message from ${name}`,
    html: `
        <h3>Email from ${email}</h3>
        <p>${message}</p>
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).json({ status: "false", message: "Email not sent" });
      console.log(error);
    } else {
      res.json({ status: "success", message: "Email sent successfully" });
    }
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
