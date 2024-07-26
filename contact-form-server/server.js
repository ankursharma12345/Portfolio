require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
var cors = require("cors");

const app = express();
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

const port = 3000;

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log(email);
  console.log("Environment Variables Loaded:");
  console.log("Email User:", process.env.EMAIL_USER);
  console.log("App Password:", process.env.APP_PASSWORD);
  // Set up nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.APP_PASSWORD, // Use the app password here
    },
  });
  const mailOptions = {
    from: `${email}`,
    to: "ankursharma131198@gmail.com",
    subject: `Message from ${name}`,
    text: message,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    res.status(200).send("Message sent successfully");
  });

  // receiver.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     res.status(500).send(error.toString());
  //   }
  //   console.log(info);
  //   res.status(200).json("Message sent: " + info.response);
  // });

  // const info = await receiver.sendMail(mailOptions);

  // res.status(200).send(info);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
