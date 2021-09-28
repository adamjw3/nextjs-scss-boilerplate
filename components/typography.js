import React from 'react';
import PropTypes from 'prop-types';

function Typography({ tag: Tag, cssClass, children }) {
    return <Tag className={cssClass}>{children}</Tag>;
}

Typography.propTypes = {
    tag: PropTypes.string,
    cssClass: PropTypes.string,
    children: PropTypes.string,
};

Typography.defaultProps = {
    tag: 'h2',
};

export default Typography;
