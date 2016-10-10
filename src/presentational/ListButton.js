import React from 'react';
import List from './List';
import Button from './Button';

const ListButton = (props) => (
    <List
        {...props}
        renderRow={
            rowData => <Button {...rowData} />
        } />
);

export default ListButton;
