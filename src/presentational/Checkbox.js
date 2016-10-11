import React from 'react';

const Checkbox = ({ checked, key, onPress }) => (
    <input type="checkbox" checked={checked} id={key} onChange={onPress} />
);

Checkbox.propTypes = {
    checked: React.PropTypes.bool,
    key: React.PropTypes.string.isRequired,
};

Checkbox.defaultProps = {
    checked: false
};

export default Checkbox;
