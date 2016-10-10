import React from 'react';
import Text from './Text';

const Title = ({ children }) => (
    <Text
        fontSize={100}
        fontWeight={100}
        color={'mystery'}>{children}</Text>
);

Title.propTypes = {
    children: React.PropTypes.node.isRequired,
};

export default Title;
