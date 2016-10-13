import React from 'react';

export default propMap =>
    Component =>
        props =>
            <Component {...propMap(props)} />;
