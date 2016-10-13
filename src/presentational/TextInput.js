import React from 'react';

const TextInput = ({ placeholder, onKeyDown }) => (
    <input
        type="text"
        placeholder={placeholder}
        onKeyDown={onKeyDown}
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
    placeholder: React.PropTypes.string,
    onKeyDown: React.PropTypes.func.isRequired,
};

TextInput.defaultProps = {
    placeholder: '',
};

export default TextInput;
