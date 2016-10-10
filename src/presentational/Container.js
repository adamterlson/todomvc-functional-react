import React from 'react';

const colors = {
    standard: 'white',
    paperish: '#f5f5f5',
};

const Container = ({
    children,
    rotate,
    display,
    flexDirection,
    centered,
    float,
    backgroundColor,
    fill,
}) => (
    <div style={{
        backgroundColor: colors[backgroundColor],
        transform: rotate ? `rotate(${rotate}deg)` : null,
        display: 'flex',
        position: 'relative',
        flexDirection,
        float,
        alignItems: centered ? 'center' : 'flex-start',
        height: fill ? '100%' : 'auto',
    }}>
        {children}
    </div>
);

Container.propTypes = {
    children: React.PropTypes.node.isRequired,
    rotate: React.PropTypes.number,
    flexDirection: React.PropTypes.oneOf(['row','column']),
    centered: React.PropTypes.bool,
    fill: React.PropTypes.bool,
    float: React.PropTypes.oneOf(['left', 'right']),
    backgroundColor: React.PropTypes.oneOf(Object.keys(colors)),
};

Container.defaultProps = {
    display: 'flex',
    flexDirection: 'column',
    centered: false,
    float: null,
    fill: false,
    backgroundColor: 'standard',
};

export default Container;
