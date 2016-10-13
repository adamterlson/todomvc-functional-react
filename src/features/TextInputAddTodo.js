import compose from './compose';
import store from '../store';

import TextInput from '../presentational/TextInput';
import propMap from '../enhancers/propMap';
import updateStore from '../enhancers/updateStore';
import keyMap from '../enhancers/keyMap';

export default compose(
    updateStore(
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
