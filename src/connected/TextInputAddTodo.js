import compose from '../compose';
import store from '../store';

import TextInput from '../presentational/TextInput';

import keyboardBindings from '../enhancers/keyboardBindings';
import propMap from '../enhancers/propMap';
import updateState from '../enhancers/updateState';
import updateStore from '../enhancers/updateStore';

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
    updateStore(
        store,
        set => ({
            onSave: description =>
                set(state => ({
                    ...state,
                    todos: [
                        ...state.todos,
                        { description }
                    ],
                })),
        })
    ),
    keyboardBindings('onKeyDown', (listenTo, { onSave, onClear }) => {
        listenTo('Enter', onSave);
        listenTo('Enter', onClear);
        listenTo('Escape', onClear);
    }),
    propMap(
        props => ({
            ...props,
            onChange: props.onChange,
        })
    )
)(TextInput);
