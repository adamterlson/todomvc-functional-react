import React from 'react';
import List from './List';
import SelectItem from './SelectItem';

const ListSelectItem = (props) => (
    <List {...props} renderRow={(rowData) => <SelectItem {...rowData} />} />
);

export default ListSelectItem;
