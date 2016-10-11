import compose from './compose';

import ListSelectItem from '../presentational/ListSelectItem';

import withState from '../enhancers/withState';

export default compose(
    withState(
        state => ({
            todos: state.todos
        }),
        set => ({
            toggleTodo: description => set(state => ({
                todos: state.todos.map(todo => ({
                    ...todo,
                    completed: todo.description === description ? !todo.completed : todo.completed
                }))
            }))
        }),
        (getProps, setProps) => ({
            dataSource: getProps.todos.map(
                todo => ({
                    children: todo.description,
                    selected: todo.completed,
                    onPress: () => setProps.toggleTodo(todo.description)
                })
            )
        })
    )
)(ListSelectItem);
