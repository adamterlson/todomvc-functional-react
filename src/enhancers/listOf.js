import React from 'react';
import setProps from './setProps';

export default (Component, propName = 'renderRow') =>
    setProps({
        [propName]: (props) => <Component {...props} />,
    });
