import React from 'react';
import Checkbox from './Checkbox';
import Label from './Label';
import RowContainer from './RowContainer';

let i = 0;
const makeUniqueKey = () => {
    i += 1;
    return 'key' + i;
};

const SelectItem = ({ onChange, selected, children }) => {
    const forKey = makeUniqueKey();
    return (
        <RowContainer key={forKey}>
            <Checkbox
                checked={selected}
                id={forKey}
                onChange={onChange}
            />
            <Label
                for={forKey}
                children={children}
            />
        </RowContainer>
    );
};

SelectItem.propTypes = {
    children: React.PropTypes.string.isRequired,
    selected: React.PropTypes.bool,
};

SelectItem.defaultProps = {
    selected: false
};

export default SelectItem;
