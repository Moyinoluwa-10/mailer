"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactEmail = ContactEmail;
var _react = _interopRequireDefault(require("react"));
var _components = require("@react-email/components");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ContactEmail(_ref) {
  var firstName = _ref.firstName;
  return /*#__PURE__*/_react["default"].createElement(_components.Html, null, /*#__PURE__*/_react["default"].createElement(_components.Head, null), /*#__PURE__*/_react["default"].createElement(_components.Preview, null, "Excited to connect with you! I'll review your message and respond as soon as possible."), /*#__PURE__*/_react["default"].createElement(_components.Body, {
    style: main
  }, /*#__PURE__*/_react["default"].createElement(_components.Container, {
    style: container
  }, /*#__PURE__*/_react["default"].createElement(_components.Img, {
    src: "https://res.cloudinary.com/dapwu9k1x/image/upload/v1727574713/p12yr9r5bwhjk4hvvat0.png",
    width: "118",
    height: "40",
    alt: "logo",
    style: logo
  }), /*#__PURE__*/_react["default"].createElement(_components.Text, {
    style: paragraph
  }, "Hi ", firstName, ","), /*#__PURE__*/_react["default"].createElement(_components.Text, {
    style: paragraph
  }, "Thank you for reaching out! I\u2019m excited to connect with you and appreciate you taking the time to send me a message through my portfolio website."), /*#__PURE__*/_react["default"].createElement(_components.Text, {
    style: paragraph
  }, "I will review your message and respond as soon as I can. If there's anything specific you'd like to discuss or if you have any immediate questions, please don't hesitate to let me know."), /*#__PURE__*/_react["default"].createElement(_components.Text, {
    style: paragraph
  }, "Best regards,", /*#__PURE__*/_react["default"].createElement("br", null), "Moyinoluwa Adelowo", /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_components.Link, {
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

// module.exports = { ContactEmail };
