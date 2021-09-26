const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_APIKEY);

export default function handler(req, res) {
    if (req.method === 'POST') {
        const email = {
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            subject: 'Website Contact Form',
            html: `<div>
          <div><strong>Name:</strong> ${req.body.name}<br/></div>
          <div><strong>Phone:</strong> ${req.body.phone}<br/></div>
          <div><strong>Email:</strong> ${req.body.email}<br/></div>
          <div><strong>more:</strong> ${req.body.more}<br/></div>
        </div>`,
        };

        try {
            return sgMail
                .send(email)
                .then(() => {
                    return res.status(200).json();
                })
                .catch((error) => {
                    return res.status(500).send(error);
                });
        } catch (error) {
            return res.status(405).send(error);
        }
    }

    return;
}
