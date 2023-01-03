const express = require("express");
const mailRouter = express.Router();
const { sendMail } = require("../controller/mail");

mailRouter.post("/", sendMail);

module.exports = mailRouter;
