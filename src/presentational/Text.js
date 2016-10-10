import React from 'react';

const colors = {
    standard: 'black',
    mystery: 'rgba(175, 47, 47, 0.15)'
};

const Text = ({
    children,
    fontSize,
    fontWeight,
    color,
}) => (
    <span style={{
        color: colors[color],
        fontSize: fontSize + 'px',
        fontWeight,
    }}>{children}</span>
);

Text.propTypes = {
    children: React.PropTypes.node.isRequired,
};

Text.defaultProps = {
    color: 'standard',
    fontWeight: 300,
}

export default Text;
