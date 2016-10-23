import React from 'react';

const colors = {
    standard: 'white',
    paperish: '#f5f5f5',
};

const paddings = {
    none: 0,
    standard: 15,
};

const borders = {
    none: 0,
    standard: '1px solid #ededed',
};

const Container = ({
    backgroundColor,
    borderBottom,
    centered,
    children,
    fill,
    flexDirection,
    float,
    justifyContent,
    padding,
    paddingHorizontal,
    paddingVertical,
    rotate,
    threedee,
    width,
}) => (
    <div style={{
        alignItems: centered ? 'center' : 'flex-start',
        backgroundColor: colors[backgroundColor],
        borderBottom: borders[borderBottom],
        boxShadow: threedee ? '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1)' : 'none',
        display: 'flex',
        flexDirection,
        float,
        height: fill ? '100%' : 'auto',
        justifyContent,
        minWidth: fill ? '100%' : 'auto',
        padding: paddings[padding],
        paddingBottom: paddings[paddingVertical],
        paddingLeft: paddings[paddingHorizontal],
        paddingRight: paddings[paddingHorizontal],
        paddingTop: paddings[paddingVertical],
        position: 'relative',
        transform: rotate ? `rotate(${rotate}deg)` : null,
        width,
    }}>
        {children}
    </div>
);

Container.propTypes = {
    backgroundColor: React.PropTypes.oneOf(Object.keys(colors)),
    borderBottom: React.PropTypes.oneOf(Object.keys(borders)),
    centered: React.PropTypes.bool,
    children: React.PropTypes.node.isRequired,
    fill: React.PropTypes.bool,
    flexDirection: React.PropTypes.oneOf(['row','column']),
    float: React.PropTypes.oneOf(['left', 'right']),
    justifyContent: React.PropTypes.oneOf(['space-between', 'flex-start']),
    paddingHorizontal: React.PropTypes.oneOf(Object.keys(paddings)).isRequired,
    paddingVertical: React.PropTypes.oneOf(Object.keys(paddings)).isRequired,
    rotate: React.PropTypes.number,
    threedee: React.PropTypes.bool,
    width: React.PropTypes.number,
};

Container.defaultProps = {
    backgroundColor: 'standard',
    centered: false,
    display: 'flex',
    fill: false,
    flexDirection: 'column',
    float: null,
    justifyContent: 'flex-start',
    paddingHorizontal: 'none',
    paddingVertical: 'none',
    threedee: false
};

export default Container;
