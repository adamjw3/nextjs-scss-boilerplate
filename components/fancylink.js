import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
export default function FancyLink({ destination, a11yText, label, extraClasses }) {
    return (
        <Link href={destination}>
            <a aria-label={a11yText} className={`${extraClasses}`}>
                {label}
            </a>
        </Link>
    );
}

FancyLink.propTypes = {
    destination: PropTypes.string,
    a11yText: PropTypes.string,
    label: PropTypes.string,
    extraClasses: PropTypes.string,
};
