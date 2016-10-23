import compose from '../compose';
import store from '../store';

import SelectItem from '../presentational/SelectItem';
import requires from '../enhancers/requires';
import updateStore from '../enhancers/updateStore';

const SelectItemTodo = compose(
    requires(PropTypes => ({
        todoId: PropTypes.string.isRequired,
    })),
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
