import React from 'react';

const Checkbox = ({ checked, id, onPress }) => (
    <input type="checkbox" checked={checked} id={id} onChange={onPress} />
);

Checkbox.propTypes = {
    checked: React.PropTypes.bool,
    id: React.PropTypes.string.isRequired,
};

Checkbox.defaultProps = {
    checked: false
};

export default Checkbox;
