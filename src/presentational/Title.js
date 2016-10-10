import React from 'react';
import Text from './Text';

const Title = ({ children }) => (
    <Text align="center">{children}</Text>
);

Title.propTypes = {
    children: React.PropTypes.node.isRequired,
};

export default Title;
