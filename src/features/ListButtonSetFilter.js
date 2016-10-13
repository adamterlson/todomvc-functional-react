import compose from './compose';
import todoStore from '../store';

import List from '../presentational/List';

import listOf from '../enhancers/listOf';
import withStore from '../enhancers/withStore';

import ButtonSetFilter from './ButtonSetFilter';

export default compose(
    listOf(ButtonSetFilter),
    withStore(
        todoStore,
        state => ({
            dataSource: state.filters.map(filter => ({
                filter
            })),
        })
    )
)(List);
