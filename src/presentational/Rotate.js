import React from 'react';
import Container from './Container';

const Rotate = ({ children, degrees }) => (
    <Container rotate={degrees}>
        {children}
    </Container>
);

Rotate.propTypes = {
    children: React.PropTypes.node.isRequired,
    degrees: React.PropTypes.oneOf([90, 180, 270]).isRequired,
};

export default Rotate;
