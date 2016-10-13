import React from 'react';

const TextInput = ({ placeholder, onKeyDown, value }) => (
    <input
        type="text"
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        value={value}
        style={{
            background: 'transparent',
            border: 'none',
            color: '#4d4d4d',
            fontSize: '24px',
            fontWeight: '300',
            lineHeight: '1.4em',
            outline: 'none',
            width: '100%',
        }}/>
);

TextInput.propTypes = {
    onKeyDown: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string,
};

TextInput.defaultProps = {
    placeholder: '',
    value: '',
};

export default TextInput;
