import compose from './compose';
import todoStore from '../store';

import ListView from '../presentational/ListView';

import listOf from '../enhancers/listOf';
import usingStore from '../enhancers/usingStore';

import ButtonSetFilter from './ButtonSetFilter';

export default compose(
    listOf(ButtonSetFilter),
    usingStore(
        todoStore,
        state => ({
            dataSource: state.filters.map(filter => ({
                filter
            })),
        })
    )
)(ListView);
