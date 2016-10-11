import React from 'react';
import propMap from './propMap';

export default (ItemComponent, mapProps) => ListComponent => props => {
    const EnhancedItemComponent = propMap(p => mapProps(p, props))(ItemComponent);
    const renderRow = rowData => <EnhancedItemComponent {...rowData} />
    return (
        <ListComponent
            {...props}
            renderRow={renderRow} />
    );
};
