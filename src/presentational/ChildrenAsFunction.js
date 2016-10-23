import React from 'react';

const ComposeWith = (props) => (
    <div>
        {props.children(props)}
    </div>
);

ComposeWith.propTypes = {
    children: React.PropTypes.func.isRequired,
};

export default ComposeWith;
