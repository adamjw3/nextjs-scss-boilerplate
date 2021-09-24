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
            sgMail
                .send(email)
                .then(() => {
                    console.log('res', res.json);
                    return res;
                })
                .catch((error) => {
                    console.log('error', error);
                    return res.status(500).send(error);
                });
        } catch (error) {
            res.json(error);
            res.status(405).end();
        }
    }
}
