import React, { useState } from 'react';
import FancyLink from './fancylink';

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */

function Header() {
    return (
        <div className="c-header-header" data-scroll-section>
            <div className="l-grid">
                <div className="c-header-headerinner">
                    <FancyLink destination="/" a11yText="text" label="Next js Boilerplate" extraClasses="c-header-logo" />
                    <nav className="c-header-nav">
                        <ul>
                            <li>
                                <FancyLink destination="/" a11yText="text" label="Home" />
                            </li>
                            <li>
                                <FancyLink destination="/about" a11yText="text" label="About" />
                            </li>
                            <li>
                                <FancyLink destination="/contact" a11yText="text" label="Contact" />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;
