import React from 'react';

const Checkbox = ({ checked, key }) => (
    <input type="checkbox" checked={checked} id={key} />
);

Checkbox.propTypes = {
    checked: React.PropTypes.bool,
    key: React.PropTypes.string.isRequired,
};

Checkbox.defaultProps = {
    checked: false
};

export default Checkbox;
