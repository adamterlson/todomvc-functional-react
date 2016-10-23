import React from 'react';
import Container from './Container';

const RowContainer = (props) => (
    <Container
        {...props}
        flexDirection="row"
        fill
        centered />
);

export default RowContainer;
