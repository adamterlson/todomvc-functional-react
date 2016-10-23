import compose from '../compose';
import TextInput from '../presentational/TextInput';

import keyboardBindings from '../enhancers/keyboardBindings';
import updateState from '../enhancers/updateState';
import createTodo from '../enhancers/createTodo';

export default compose(
    updateState(
        { value: '' },
        set => ({
            onChange: e => set(state => ({
                ...state,
                value: e.target.value,
            })),
            onClear: () => set(state => ({
                ...state,
                value: '',
            }))
        }),
    ),
    createTodo(
        create => ({
            onSave: create
        })
    ),
    keyboardBindings('onKeyDown', (listenTo, { onSave, onClear }) => {
        listenTo('Enter', onSave);
        listenTo('Enter', onClear);
        listenTo('Escape', onClear);
    })
)(TextInput);
