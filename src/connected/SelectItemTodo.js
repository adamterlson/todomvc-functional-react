import compose from '../compose';
import store from '../store';

import SelectItem from '../presentational/SelectItem';
import requires from '../enhancers/requires';
import usingStore from '../enhancers/usingStore';
import updateStore from '../enhancers/updateStore';

const SelectItemTodo = compose(
    requires(PropTypes => ({
        todoId: PropTypes.string.isRequired,
    })),
    usingStore(
        store,
        (state, { todoId }) => {
            const todo = state.todos
                .filter(todo => todo.todoId === todoId)[0];

            return {
                children: todo.description,
                selected: todo.completed,
            };
        }
    ),
    updateStore(
        store,
        (set, { todoId }) => ({
            onChange: () =>
                set(state => ({
                    todos: state.todos.map(todo => ({
                        ...todo,
                        completed: todo.todoId === todoId ? !todo.completed : todo.completed,
                    }))
                }))
        })
    )
)(SelectItem);

export default SelectItemTodo;
