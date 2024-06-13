import nodemailer from 'nodemailer'
import config from '../config/config.js'
import { logger } from './error/logger.js';


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: config.GMAIL_USER_APP,
        pass: config.GMAIL_PASS_APP
    }
})

transporter.verify(function (error, success) {
    if (error) {
        logger.error(error);
    } else {
        logger.info("Server is ready to take our messages");
    }
});

export default async (email, subject, html) => {
    return await transporter.sendMail({
        from: '<KI Enrolment>',
        to: email,
        subject: subject,
        html: html
    })
}