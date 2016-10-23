import compose from '../compose';
import store from '../store';

import SelectItemTodo from '../connected/SelectItemTodo';

import ListView from '../presentational/ListView';
import listOf from '../enhancers/listOf';
import usingStore from '../enhancers/usingStore';

export default compose(
    usingStore(
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
    ),
    listOf(SelectItemTodo, todo => ({
        todoId: todo.description,
        selected: todo.completed,
        children: todo.description,
    })),
)(ListView);
