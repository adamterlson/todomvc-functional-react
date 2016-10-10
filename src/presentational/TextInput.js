import React from 'react';

const TextInput = ({ placeholder, onChange }) => (
    <input type="text" placeholder={placeholder} onChange={onChange} />
);

TextInput.propTypes = {
    placeholder: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
};

TextInput.defaultProps = {
    placeholder: '',
};

export default TextInput;
