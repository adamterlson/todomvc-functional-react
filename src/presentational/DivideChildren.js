import React from 'react';
import Container from './Container';

const DivideChildren = ({ children }) => (
    <Container>
        {React.Children.map(children, (child, i) => (
            <Container borderBottom={true ? 'standard' : 'none'}>
                {child}
            </Container>
        ))}
    </Container>
);

DivideChildren.propTypes = {
    children: React.PropTypes.node.isRequired,
};

export default DivideChildren;
