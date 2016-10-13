import compose from './compose';
import store from '../store';

import withStore from '../enhancers/withStore';
import childrenAsFunction from '../enhancers/childrenAsFunction';

export default compose(
    withStore(
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
