import React from 'react';
import Checkbox from './Checkbox';
import Label from './Label';
import RowOfItems from './RowOfItems';

const SelectItem = ({ onPress, selected, description }) => (
    <RowOfItems key={description}>
        <Checkbox checked={selected} id={description} onPress={onPress} /><Label for={description}>{description}</Label>
    </RowOfItems>
);

SelectItem.propTypes = {
    description: React.PropTypes.string.isRequired,
    selected: React.PropTypes.bool,
};

SelectItem.defaultProps = {
    selected: false
};

export default SelectItem;
