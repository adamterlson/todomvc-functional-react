import compose from './compose';
import todoStore from '../store';

import List from '../presentational/List';
import Button from '../presentational/Button';
import setProps from '../enhancers/setProps';
import changesState from '../enhancers/changesState';
import listOf from '../enhancers/listOf';

export default compose(
    setProps({
        dataSource: [{ name: 'active' }, { name: 'completed' }, { name: 'all' }],
    }),
    changesState(
        todoStore,
        set => ({
            setFilter: filter => set(state => ({
                ...state,
                filter,
            }))
        })
    ),
    listOf(
        Button,
        (filter, { setFilter }) => ({
            children: filter.name,
            onPress: () => {
                setFilter(filter.name)
            },
        })
    )
)(List);
