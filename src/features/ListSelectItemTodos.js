import compose from './compose';
import store from '../store';

import SelectItemTodo from '../features/SelectItemTodo';

import List from '../presentational/List';
import listOf from '../enhancers/listOf';
import withState from '../enhancers/withState';

export default compose(
    listOf(SelectItemTodo),
    withState(
        store,
        state => ({
            dataSource: state.todos.filter(
                todo => {
                    if (state.activeFilter === 'active') {
                        return !todo.completed;
                    } else if (state.activeFilter === 'completed') {
                        return todo.completed;
                    }
                    return true;
                }
            ),
        })
    )
)(List);
