import React from 'react';

const Container = ({
    children,
    rotate,
    display,
    flexDirection,
    centered,
}) => (
    <div style={{
        transform: rotate ? `rotate(${rotate}deg)` : null,
        display,
        flexDirection,
        alignItems: centered ? 'center' : 'flex-start'
    }}>
        {children}
    </div>
);

Container.propTypes = {
    children: React.PropTypes.node.isRequired,
    rotate: React.PropTypes.number,
    display: React.PropTypes.oneOf(['flex']),
    flexDirection: React.PropTypes.oneOf(['row','column']),
    centered: React.PropTypes.bool,
};

Container.defaultProps = {
    display: 'flex',
    flexDirection: 'column',
    centered: false,
};

export default Container;
