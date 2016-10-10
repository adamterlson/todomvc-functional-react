import React from 'react';
import Container from './Container';

const SpaceChildren = ({ children }) => (
    <Container fill>
        {React.Children.map(children, (child, i) => (
            <Container
                fill
                paddingVertical="standard"
                paddingHorizontal="standard"
                borderBottom={i < children.length - 1 ? 'standard' : 'none'}>
                {child}
            </Container>
        ))}
    </Container>
);

SpaceChildren.propTypes = {
    children: React.PropTypes.node.isRequired,
};

export default SpaceChildren;
