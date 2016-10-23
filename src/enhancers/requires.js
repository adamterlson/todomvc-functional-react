import React from 'react';

export default (propTypes) => Component => {
    const RequiresHOC = (props) => <Component {...props} />;

    RequiresHOC.propTypes = propTypes(React.PropTypes);

    return RequiresHOC;
};
