import compose from './compose';
import store from '../store';

import List from '../presentational/List';
import withState from '../enhancers/withState';

export default compose(
    withState(
        store,
        state => ({
            dataSource: state.todos.filter(
                todo => {
                    if (state.activeFilter === 'active') {
                        return !todo.completed;
                    } else if (state.activeFilter === 'completed') {
                        return todo.completed;
                    }
                    return true;
                }
            ),
        })
    )
)(List);
