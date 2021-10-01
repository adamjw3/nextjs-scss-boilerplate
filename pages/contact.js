import React from 'react';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import { fade } from '../helpers/transitions';
import Layout from '../components/layout';
import ContactForm from '../components/contactForm';

function Contact() {
    return (
        <Layout>
            <NextSeo title="Contact page" />
            <motion.div initial="initial" animate="enter" exit="exit" className="l-grid-maincontent">
                <motion.div variants={fade}>
                    <div>
                        <h1 className="heading">Contact</h1>
                        <br />
                        <p className="para">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum lectus eu faucibus accumsan. Nulla erat metus, sagittis et dolor id, ultrices venenatis metus.
                            Vivamus ultrices massa ut lectus cursus sollicitudin. Suspendisse at purus vulputate, venenatis magna a, gravida quam. Vivamus non congue nibh, nec dignissim lectus. Morbi
                            id odio auctor tellus blandit dignissim. Sed non convallis orci. Nulla facilisis tellus at tellus vehicula gravida. Nam ex diam, eleifend sit amet consectetur non, finibus
                            posuere velit. Nunc ut augue varius, dapibus risus at, malesuada ligula.
                        </p>
                        <ContactForm />
                    </div>
                </motion.div>
            </motion.div>
        </Layout>
    );
}

export default Contact;
