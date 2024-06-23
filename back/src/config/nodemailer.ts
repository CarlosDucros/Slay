const nodeMailer = require("nodemailer");
import { EMAIL_HOST, EMAIL, EMAIL_PASS, EMAIL_PORT } from "./envs";

const transporter = nodeMailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: true,
  auth: {
    user: EMAIL,
    pass: EMAIL_PASS,
  },
});

let email = {
  from: EMAIL,
  to: "",
  subject: "",
  text: "",
  html: "",
};

transporter.sendMail(email, (error: any, info: any) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent successfully");
  }
});

//No me dio el tiempo para hacer la confirmación via email
