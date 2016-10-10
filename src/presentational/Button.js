import React from 'react';

const Button = ({ children, onPress }) => (
    <button onClick={onPress}>{children}</button>
);

Button.propTypes = {
    children: React.PropTypes.node.isRequired,
    onPress: React.PropTypes.func.isRequired,
};

// Button.defaultProps = { children, onPress };

export default Button;
