import React from 'react';

export default () => {
    const ChildrenAsFunctionHOC = props =>
        props.children(props);

    ChildrenAsFunctionHOC.propTypes = {
        children: React.PropTypes.func.isRequired,
    };

    return ChildrenAsFunctionHOC;
};
