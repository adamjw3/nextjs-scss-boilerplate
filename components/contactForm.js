import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import TextAreaField from './textAreaField';
import TextField from './textfield';

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
            onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(true);
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
                const data = await response.json();
                setSubmitting(false);
                console.log('response 1', data);
            }}
        >
            {(props) => {
                const { values, setFieldValue } = props;
                console.log('props', props);
                console.log('values', values);
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
                        {values.success && (
                            <div>
                                <p>Your enquiry has been successfully submitted.</p>
                            </div>
                        )}
                        {values.nosend && (
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
