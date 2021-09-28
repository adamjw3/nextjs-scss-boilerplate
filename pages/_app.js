import React from 'react';
import { useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { Seo } from '../helpers/seo.config';
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const containerRef = useRef(null);

    return (
        <>
            <DefaultSeo {...Seo} />
            <LocomotiveScrollProvider options={{ smooth: true, lerp: 0.05 }} containerRef={containerRef} watch={[]}>
                <AnimatePresence exitBeforeEnter>
                    <div data-scroll-container ref={containerRef}>
                        <Component {...pageProps} key={router.asPath} />
                    </div>
                </AnimatePresence>
            </LocomotiveScrollProvider>
        </>
    );
}

export default MyApp;
