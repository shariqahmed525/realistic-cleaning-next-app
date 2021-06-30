import nodemailer from "nodemailer";
import { USER_EMAIL, USER_PASS } from "./constant";

const sendMail = async (obj) => {
    var transporter = nodemailer.createTransport({
        // Gmail Configuration
        host: "smtp.gmail.com",
        tls: 587,
        port: 465,
        service: "Gmail",
        auth: {
            user: USER_EMAIL,
            pass: USER_PASS,
        },

        // GoDaddy Configuration
        // host: "smtpout.secureserver.net",
        // secure: true,
        // secureConnection: false, // TLS requires secureConnection to be false
        // tls: {
        //     ciphers: "SSLv3",
        // },
        // requireTLS: true,
        // port: 465,
        // debug: true,
        // auth: {
        //      user: USER_EMAIL,
        //      pass: USER_PASS,
        // },
    });

    return new Promise((resolve, reject) => {
        transporter.sendMail(
            obj?.isEmail ? emailOptions(obj) : queryOptions(obj),
            function (error, info) {
                if (error) {
                    console.log("rejected: ", error);
                    reject(error);
                } else {
                    console.log("Email sent: " + info.response);
                    resolve(info.response);
                }
            }
        );
    });
};

export default sendMail;

const emailOptions = ({ name, email, subject, message }) => {
    const html = `
        <h2>Contact US</h2>
        <p>${message}</p>
      `;

    return {
        from: {
            name,
            address: email,
        },
        to: USER_EMAIL,
        subject: subject,
        html: html,
        replyTo: email,
        sender: email,
    };
};

const queryOptions = ({ name, clean, location, contact }) => {
    const html = `
        <h2>Query</h2>
        <p><b>Name</b>:  ${name}</p>
        <p><b>Location</b>:  ${location}</p>
        <p><b>Contact</b>:  ${contact}</p>
        <p><b>Clean</b>:  ${clean}</p>
      `;

    return {
        from: {
            address: USER_EMAIL,
        },
        to: USER_EMAIL,
        subject: "Web Query",
        html: html,
        replyTo: USER_EMAIL,
        sender: USER_EMAIL,
    };
};
