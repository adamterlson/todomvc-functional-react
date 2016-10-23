import React from 'react';

const Clickable = (props) =>
    <div {...props} style={{ display: 'inline-block', cursor: 'pointer' }} />

Clickable.propTypes = {
    onClick: React.PropTypes.func.isRequired,
};

export default Clickable;
