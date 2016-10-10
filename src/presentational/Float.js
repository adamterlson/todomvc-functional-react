import React from 'react';
import Container from './Container';

export const FloatLeft = (props) => (
    <Container {...props} float="left" />
);

FloatLeft.propTypes = {
    children: React.PropTypes.node.isRequired,
};

export const FloatRight = (props) => (
    <Container {...props} float="right" />
);

FloatRight.propTypes = {
    children: React.PropTypes.node.isRequired,
};

export default FloatLeft;
