// import nodemailer from 'nodemailer'
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host:'smtp-relay.brevo.com',
    port: 587,
    auth: {
        user:process.env.SMTP_USER,
        pass:process.env.SMTP_PASS,
    }
});

module.exports=transporter;
// export default transporter;


// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS
//   }
// });

// module.exports = transporter;