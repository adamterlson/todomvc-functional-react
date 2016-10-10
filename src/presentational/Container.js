import React from 'react';

const Container = ({
    children,
    rotate,
    display,
    flexDirection,
    centered,
    float,
}) => (
    <div style={{
        transform: rotate ? `rotate(${rotate}deg)` : null,
        display: 'flex',
        position: 'relative',
        flexDirection,
        float,
        alignItems: centered ? 'center' : 'flex-start'
    }}>
        {children}
    </div>
);

Container.propTypes = {
    children: React.PropTypes.node.isRequired,
    rotate: React.PropTypes.number,
    flexDirection: React.PropTypes.oneOf(['row','column']),
    centered: React.PropTypes.bool,
    float: React.PropTypes.oneOf(['left', 'right']),
};

Container.defaultProps = {
    display: 'flex',
    flexDirection: 'column',
    centered: false,
    float: null,
};

export default Container;
