import React from 'react';

const Button = ({ children, onPress }) => (
    <input type="button" onClick={onPress}>{children}</input>
);

Button.propTypes = {
    children: React.PropTypes.node.isRequired,
    onPress: React.PropTypes.func.isRequired,
};

// Button.defaultProps = { children, onPress };

export default Button;
