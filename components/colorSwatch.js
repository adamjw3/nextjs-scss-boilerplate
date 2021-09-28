import React from 'react';
import PropTypes from 'prop-types';

function ColorSwatch({ name, value, width, height }) {
    return (
        <div>
            <div
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    backgroundColor: value,
                    display: `inline-block`,
                }}
            >
                <div>{name}</div>
                <div>{value}</div>
            </div>
        </div>
    );
}

ColorSwatch.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
};

ColorSwatch.defaultProps = {
    width: 320,
    height: 180,
};

export default ColorSwatch;
