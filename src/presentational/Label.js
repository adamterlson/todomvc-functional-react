import React from 'react';

const Label = (props) => (
    <label htmlFor={props.for}>{props.children}</label>
);

Label.propTypes = {
    children: React.PropTypes.node.isRequired,
    for: React.PropTypes.string.isRequired,
};

export default Label;
