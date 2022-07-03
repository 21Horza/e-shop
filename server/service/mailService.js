const nodemailer = require("nodemailer");
require("dotenv").config();

class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true, 
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            }
        })
    }

    async sendVerificationLink(to, link) {
            await this.transporter.sendMail({
                from: process.env.SMTP_USER,
                to,
                subject: `Account verification for ${to}`,
                text: "",
                html:
                    `
                    <div>
                        <h1>Wellcome to Mantra thirty seven!</h1>
                        <h2>Click the link below to verify your account</h2>
                        <a href="${link}">${link}</a>
                    </div>
                    `
            }).catch(e => console.log(`Error occurred: ${e}`))

    }
}

module.exports = new MailService();