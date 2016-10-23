import React from 'react';

const Checkbox = ({ checked, id, onChange }) => (
    <input
        type="checkbox"
        checked={checked}
        id={id}
        onChange={onChange} />
);

Checkbox.propTypes = {
    checked: React.PropTypes.bool,
    id: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
    checked: false
};

export default Checkbox;
