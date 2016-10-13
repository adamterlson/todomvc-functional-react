import React from 'react';
import compose from './compose';
import todoStore from '../store';

import List from '../presentational/List';

import setProps from '../enhancers/setProps';
import withState from '../enhancers/withState';

import ButtonSetFilter from './ButtonSetFilter';

export default compose(
    setProps({
        renderRow: (props) => <ButtonSetFilter {...props} />,
    }),
    withState(
        todoStore,
        state => ({
            dataSource: state.filters.map(filter => ({
                filter
            })),
        })
    )
)(List);
