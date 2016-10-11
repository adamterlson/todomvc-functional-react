import compose from './compose';
import todoStore from '../store';

import List from '../presentational/List';
import SelectItem from '../presentational/SelectItem';
import withState from '../enhancers/withState';
import changesState from '../enhancers/changesState';
import listIsFilterable from '../enhancers/listIsFilterable';
import propMap from '../enhancers/propMap';
import listOf from '../enhancers/listOf';

export default compose(
    withState(
        todoStore,
        state => ({
            dataSource: state.todos,
            filter: state.filter,
        })
    ),
    changesState(
        todoStore,
        set => ({
            toggleTodo: description => set(state => ({
                todos: state.todos.map(todo => ({
                    ...todo,
                    completed: todo.description === description ? !todo.completed : todo.completed,
                }))
            }))
        })
    ),
    listIsFilterable(
        'dataSource',
        (dataItem, { filter }) => {
            if (filter === 'active') {
                return dataItem.completed;
            } else if (filter === 'completed') {
                return !dataItem.completed;
            }
            return true;
        }
    ),
    listOf(
        SelectItem,
        (todo, { toggleTodo }) => ({
            children: todo.description,
            selected: todo.completed,
            onPress: () => toggleTodo(todo.description),
        })
    )
)(List);
