"use strict";

var _require = require("@react-email/components"),
  Body = _require.Body,
  Container = _require.Container,
  Head = _require.Head,
  Html = _require.Html,
  Img = _require.Img,
  Link = _require.Link,
  Preview = _require.Preview,
  Text = _require.Text;
var baseUrl = process.env.VERCEL_URL ? "https://".concat(process.env.VERCEL_URL) : "http://localhost:3000";
function ContactEmail(_ref) {
  var firstName = _ref.firstName;
  return /*#__PURE__*/React.createElement(Html, null, /*#__PURE__*/React.createElement(Head, null), /*#__PURE__*/React.createElement(Preview, null, "Excited to connect with you! I'll review your message and respond as soon as possible."), /*#__PURE__*/React.createElement(Body, {
    style: main
  }, /*#__PURE__*/React.createElement(Container, {
    style: container
  }, /*#__PURE__*/React.createElement(Img, {
    src: "".concat(baseUrl, "/logo.png"),
    width: "118",
    height: "40",
    alt: "logo",
    style: logo
  }), /*#__PURE__*/React.createElement(Text, {
    style: paragraph
  }, "Hi ", firstName, ","), /*#__PURE__*/React.createElement(Text, {
    style: paragraph
  }, "Thank you for reaching out! I\u2019m excited to connect with you and appreciate you taking the time to send me a message through my portfolio website."), /*#__PURE__*/React.createElement(Text, {
    style: paragraph
  }, "I will review your message and respond as soon as I can. If there's anything specific you'd like to discuss or if you have any immediate questions, please don't hesitate to let me know."), /*#__PURE__*/React.createElement(Text, {
    style: paragraph
  }, "Best regards,", /*#__PURE__*/React.createElement("br", null), "Moyinoluwa Adelowo", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Link, {
    href: "https://moyinadelowo.com"
  }, "moyinadelowo.com")))));
}
ContactEmail.PreviewProps = {
  firstName: "Alan"
};
var main = {
  backgroundColor: "#ffffff",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
};
var container = {
  margin: "0 auto",
  padding: "20px 0 48px"
};
var logo = {
  margin: "0 auto"
};
var paragraph = {
  fontSize: "16px",
  lineHeight: "26px"
};
module.exports = {
  ContactEmail: ContactEmail
};
