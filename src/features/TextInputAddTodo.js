import compose from './compose';
import store from '../store';

import TextInput from '../presentational/TextInput';
import propMap from '../enhancers/propMap';
import updateStore from '../enhancers/updateStore';
import withProps from '../enhancers/withProps';
import ownState from '../enhancers/ownState';
import keyboard from '../enhancers/keyboard';

export default compose(
    ownState(
        set => ({
            setValue: e => set(state => ({
                ...state,
                value: e.target.value,
            })),
            clearValue: () => set(state => ({
                ...state,
                value: '',
            }))
        }),
        { value: '' },
    ),
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
    keyboard('onKeyDown', (on, { saveTodo, clearValue }) => {
        on('Enter', saveTodo);
        on('Enter', clearValue);
        on('Escape', clearValue);
    }),
    propMap(
        props => ({
            ...props,
            onChange: props.setValue,
        })
    )
)(TextInput);
