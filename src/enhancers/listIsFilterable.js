import React from 'react';

export default (key, filterFn) => ListComponent => {
    const ListIsFilterableHOC = props => (
        <ListComponent
            {...props}
            {...{ [key]: props[key].filter(arg => filterFn(arg, props)) }} />
    );

    return ListIsFilterableHOC;
}
