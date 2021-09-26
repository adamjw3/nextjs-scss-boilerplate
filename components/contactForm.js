import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import TextAreaField from './textAreaField';
import TextField from './textField';

function ContactForm() {
    return (
        <Formik
            initialValues={{
                name: '',
                phone: '',
                email: '',
                more: '',
            }}
            validationSchema={Yup.object({
                name: Yup.string().required('Required'),
                phone: Yup.string().required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
                more: Yup.string().required('Required'),
            })}
            onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
                setSubmitting(true);
                try {
                    const response = await fetch('/api/contact', {
                        body: JSON.stringify({
                            name: values.name,
                            phone: values.phone,
                            email: values.email,
                            more: values.more,
                        }),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        method: 'POST',
                    });
                    await response;
                    resetForm({});
                    setStatus({ success: true });
                } catch (error) {
                    setStatus({ success: false });
                    setSubmitting(false);
                    setErrors({ submit: error.message });
                }
            }}
        >
            {(props) => {
                const { status } = props;
                return (
                    <div className="c-contact-form">
                        <Form className="form">
                            <TextField label="Customer Name" name="name" type="text" placeholder="John" />
                            <TextField label="Phone Number" name="phone" type="text" placeholder="07909765432" />
                            <TextField label="Email Address" name="email" type="email" placeholder="John@gmail.com" />
                            <TextAreaField label="More" name="more" placeholder="More details" />
                            <button type="submit" className="c-btn">
                                Submit
                            </button>
                        </Form>
                        {status && status.success && (
                            <div>
                                <p>Your enquiry has been successfully submitted.</p>
                            </div>
                        )}
                        {status && !status.success && (
                            <div>
                                <p>OOPS, something went wrong but we know about it. please contact us via email or phone</p>
                            </div>
                        )}
                    </div>
                );
            }}
        </Formik>
    );
}

export default ContactForm;
