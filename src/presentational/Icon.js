import React from 'react';

const icons = {
    chevron: '❯',
    checkmark: 'url(data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" …"3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>);'
};

const colors = {
    light: '#e6e6e6',
    dark: '#737373',
}

const Icon = ({ name, color }) => (
    <div style={{
        width: 22,
        height: 22,
        fontSize: '22px',
        color: colors[color],
    }}>{icons[name]}</div>
);

Icon.propTypes = {
    name: React.PropTypes.oneOf(Object.keys(icons)).isRequired,
    color: React.PropTypes.oneOf(['light', 'dark']),
};

Icon.defaultProps = {
    color: 'light',
};

export default Icon;
