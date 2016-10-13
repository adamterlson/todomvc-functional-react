import compose from './compose';
import todoStore from '../store';

import List from '../presentational/List';

import listOf from '../enhancers/listOf';
import withState from '../enhancers/withState';

import ButtonSetFilter from './ButtonSetFilter';

export default compose(
    listOf(ButtonSetFilter),
    withState(
        todoStore,
        state => ({
            dataSource: state.filters.map(filter => ({
                filter
            })),
        })
    )
)(List);
