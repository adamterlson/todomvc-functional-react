import React from 'react';
import Container from './Container';

const RowOfItems = (props) => (
    <Container
        {...props}
        flexDirection="row"
        fill
        centered />
);

export default RowOfItems;
