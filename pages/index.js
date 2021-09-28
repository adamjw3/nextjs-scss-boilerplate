import React from 'react';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import FancyLink from '../components/fancylink';
import { fade } from '../helpers/transitions';
import Layout from '../components/layout';

export default function Home() {
    return (
        <Layout>
            <NextSeo title="Home page" />
            <motion.div initial="initial" animate="enter" exit="exit" className="l-grid-maincontent ">
                <motion.div variants={fade}>
                    <div data-scroll-section>
                        <h1 className="heading" data-scroll>
                            Home
                        </h1>
                        <br />
                        <p className="para">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum lectus eu faucibus accumsan. Nulla erat metus, sagittis et dolor id, ultrices venenatis metus.
                            Vivamus ultrices massa ut lectus cursus sollicitudin. Suspendisse at purus vulputate, venenatis magna a, gravida quam. Vivamus non congue nibh, nec dignissim lectus. Morbi
                            id odio auctor tellus blandit dignissim. Sed non convallis orci. Nulla facilisis tellus at tellus vehicula gravida. Nam ex diam, eleifend sit amet consectetur non, finibus
                            posuere velit. Nunc ut augue varius, dapibus risus at, malesuada ligula.
                        </p>
                        <br />
                        <p className="para">
                            Aliquam condimentum quam quam, ac finibus sem consectetur vitae. Etiam vel placerat mauris, a feugiat ligula. Integer efficitur massa facilisis, ornare ex eget, commodo
                            elit. Nam id nulla dapibus, fermentum tortor ac, viverra est. Pellentesque sodales tristique condimentum. Praesent porttitor laoreet aliquet. Maecenas in ornare ipsum.
                            Vestibulum dictum egestas scelerisque. Donec arcu lacus, laoreet vitae tellus a, ullamcorper scelerisque nulla. Nullam at luctus leo. Integer pharetra consectetur erat, ut
                            vehicula lectus rhoncus sed. In at bibendum neque. Nullam ut nunc fringilla, congue eros vitae, ultricies sapien. Proin tempus risus sit amet mi vestibulum euismod. Sed
                            posuere lacinia enim, sed ornare ex congue ac.
                        </p>
                        <br />
                        <FancyLink destination="/about" a11yText="link to about page" label="About" />
                    </div>
                </motion.div>
            </motion.div>
        </Layout>
    );
}
