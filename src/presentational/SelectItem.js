import React from 'react';
import RowOfItems from './RowOfItems';
import Text from './Text';

const SelectItem = ({ selected, children }) => (
    <RowOfItems>
        {selected ? 'Y' : 'N'} <Text>{children}</Text>
    </RowOfItems>
);

SelectItem.propTypes = {
    selected: React.PropTypes.bool,
    children: React.PropTypes.node.isRequired,
};

SelectItem.defaultProps = {
    selected: false
};

export default SelectItem;
