const express = require("express");
const cors = require("cors");

// routes
const mail = require("./routes/mail");

const app = express();

// use cors
app.use(cors());

app.use(express.json());

app.use("/api/v1/send-email", mail);

// Home route
app.get("/", (req, res) => {
  res.json({
    status: true,
    message: "Welcome to mailer",
  });
});

// Undefined route
app.get("*", (req, res) => {
  return res.status(404).send({
    status: false,
    message: "Route not found",
  });
});

module.exports = app;
