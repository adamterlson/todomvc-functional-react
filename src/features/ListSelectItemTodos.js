import compose from './compose';
import store from '../store';

import List from '../presentational/List';
import SelectItem from '../presentational/SelectItem';
import withState from '../enhancers/withState';
import changesState from '../enhancers/changesState';
import filterProp from '../enhancers/filterProp';
import listOf from '../enhancers/listOf';

export default compose(
    withState(
        store,
        state => ({
            dataSource: state.todos,
            filter: state.filter,
        })
    ),
    changesState(
        store,
        set => ({
            toggleTodo: description =>
                set(state => ({
                    todos: state.todos.map(todo => ({
                        ...todo,
                        completed: todo.description === description ? !todo.completed : todo.completed,
                    }))
                }))
        })
    ),
    filterProp(
        'dataSource',
        (dataItem, { filter }) => {
            if (filter === 'active') {
                return !dataItem.completed;
            } else if (filter === 'completed') {
                return dataItem.completed;
            }
            return true;
        }
    ),
    listOf(
        SelectItem,
        (todo, { toggleTodo }) => ({
            description: todo.description,
            children: todo.description,
            selected: todo.completed,
            onPress: () => toggleTodo(todo.description),
        })
    )
)(List);
