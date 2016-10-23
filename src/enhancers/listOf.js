import React from 'react';
import setProps from './setProps';

const noop = x => x;

export default (Component, propMap = noop, propName = 'renderRow') =>
    setProps({
        [propName]: (props) => <Component {...propMap(props)} />,
    });
