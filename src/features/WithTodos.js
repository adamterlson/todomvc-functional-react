import compose from './compose';
import store from '../store';

import withState from '../enhancers/withState';
import childrenAsFunction from '../enhancers/childrenAsFunction';

export default compose(
    withState(
        store,
        state => ({
            total: state.todos.length,
            remaining: state.todos
                .filter(todo => !todo.completed).length,
            completed: state.todos
                .filter(todo => todo.completed).length,
        })
    ),
    childrenAsFunction
)();
