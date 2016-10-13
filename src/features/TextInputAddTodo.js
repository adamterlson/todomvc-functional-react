import compose from './compose';
import store from '../store';

import TextInput from '../presentational/TextInput';
import propMap from '../enhancers/propMap';
import changesState from '../enhancers/changesState';
import keyMap from '../enhancers/keyMap';

export default compose(
    changesState(
        store,
        set => ({
            saveTodo: description =>
                set(state => ({
                    ...state,
                    todos: [
                        ...state.todos,
                        { description }
                    ],
                })),
        })
    ),
    keyMap({
        Enter: (e, { saveTodo }) => saveTodo(e.target.value)
    })
)(TextInput);
