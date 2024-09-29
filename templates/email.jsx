// const React = require("react");
// const {
//   Body,
//   Container,
//   Head,
//   Html,
//   Img,
//   Link,
//   Preview,
//   Text,
// } = require("@react-email/components");

import React from "react";
import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from "@react-email/components";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export function ContactEmail({ firstName }) {
  return (
    <Html>
      <Head />
      <Preview>
        Excited to connect with you! I'll review your message and respond as
        soon as possible.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`${baseUrl}/logo.png`}
            width="118"
            height="40"
            alt="logo"
            style={logo}
          />
          <Text style={paragraph}>Hi {firstName},</Text>
          <Text style={paragraph}>
            Thank you for reaching out! I’m excited to connect with you and
            appreciate you taking the time to send me a message through my
            portfolio website.
          </Text>
          <Text style={paragraph}>
            I will review your message and respond as soon as I can. If there's
            anything specific you'd like to discuss or if you have any immediate
            questions, please don't hesitate to let me know.
          </Text>
          <Text style={paragraph}>
            Best regards,
            <br />
            Moyinoluwa Adelowo
            <br />
            <Link href="https://moyinadelowo.com">moyinadelowo.com</Link>
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

ContactEmail.PreviewProps = {
  firstName: "Alan",
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

// module.exports = { ContactEmail };
