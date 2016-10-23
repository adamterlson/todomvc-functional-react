import compose from './compose';
import store from '../store';

import usingStore from '../enhancers/usingStore';
import ChildrenAsFunction from '../presentational/ChildrenAsFunction';

export default compose(
    usingStore(
        store,
        state => ({
            total: state.todos.length,
            remaining: state.todos
                .filter(todo => !todo.completed).length,
            completed: state.todos
                .filter(todo => todo.completed).length,
        })
    )
)(ChildrenAsFunction);
