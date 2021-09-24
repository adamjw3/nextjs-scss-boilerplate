import React from 'react';

import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
    return (
        <div className="l-grid l-grid-outter">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
