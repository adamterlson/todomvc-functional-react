import React from 'react';

const Button = ({ children, onPress }) => (
    <a
        style={{
            padding: '3px 7px',
            textDecoration: 'none',
            border: '1px solid rgba(175, 47, 47, 0.2)',
            borderRadius: 3
        }}
        onClick={onPress}>{children}
    </a>
);

Button.propTypes = {
    children: React.PropTypes.node.isRequired,
    onPress: React.PropTypes.func.isRequired,
};

// Button.defaultProps = { children, onPress };

export default Button;
