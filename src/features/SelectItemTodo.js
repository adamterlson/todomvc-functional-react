import compose from './compose';
import store from '../store';

import SelectItem from '../presentational/SelectItem';
import propMap from '../enhancers/propMap';
import updateStore from '../enhancers/updateStore';

export default compose(
    propMap(
        todo => ({
            selected: todo.completed,
            description: todo.description,
        })
    ),
    updateStore(
        store,
        (set, { description }) => ({
            onPress: () =>
                set(state => ({
                    todos: state.todos.map(todo => ({
                        ...todo,
                        completed: todo.description === description ? !todo.completed : todo.completed,
                    }))
                }))
        })
    )
)(SelectItem);
