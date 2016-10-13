import compose from './compose';
import store from '../store';

import SelectItem from '../presentational/SelectItem';
import propMap from '../enhancers/propMap';
import changesState from '../enhancers/changesState';

export default compose(
    propMap(
        todo => ({
            selected: todo.completed,
            description: todo.description,
        })
    ),
    changesState(
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
