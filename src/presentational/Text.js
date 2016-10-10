import React from 'react';

const Text = ({ children }) => (
    <span>{children}</span>
);

Text.propTypes = {
    children: React.PropTypes.node.isRequired,
};

export default Text;
