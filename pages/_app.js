import React from 'react';
import { useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { Seo } from '../helpers/seo.config';
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    return (
        <>
            <DefaultSeo {...Seo} />
            <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} key={router.asPath} />
            </AnimatePresence>
        </>
    );
}

export default MyApp;
