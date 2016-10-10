import React from 'react';
import Checkbox from './Checkbox';
import Label from './Label';
import RowOfItems from './RowOfItems';

const SelectItem = ({ selected, children, key }) => (
    <RowOfItems>
        <Checkbox checked={selected} key={key} /><Label for={key}>{children}</Label>
    </RowOfItems>
);

SelectItem.propTypes = {
    children: React.PropTypes.node.isRequired,
    key: React.PropTypes.string.isRequired,
    selected: React.PropTypes.bool,
};

SelectItem.defaultProps = {
    selected: false
};

export default SelectItem;
