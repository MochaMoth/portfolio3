var nodemailer = require('nodemailer');
require('dotenv').config();

const transport = {
    // host: 'smtp.gmail.com',
    service: "Gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
}

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) =>
{
    if (error)
        console.log(error);
    else
        console.log('Server is ready to take messages');
});

module.exports = {
    send: (req, res) =>
    {
        const mail = {
            from: req.body.email,
            to: process.env.EMAIL,
            subject: `${req.body.email} sent you a message!`,
            text: req.body.message,
            html: req.body.message
        }

        transporter.sendMail(mail, (err, data) =>
        {
            if (err)
            {
                console.log(err);
                res.json({ ERROR: err, status: "error" });
            }
            else
            {
                res.json({ status: "success" });
            }
        });
    }
}