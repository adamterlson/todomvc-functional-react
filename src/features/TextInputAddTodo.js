import compose from './compose';
import store from '../store';

import TextInput from '../presentational/TextInput';
import propMap from '../enhancers/propMap';
import updateStore from '../enhancers/updateStore';
import withProps from '../enhancers/withProps';
import ownState from '../enhancers/ownState';
import keyMap from '../enhancers/keyMap';

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
    keyMap(
        ({ clearValue, saveTodo }) => ({
            Enter: e => {
                saveTodo(e.target.value);
                clearValue();
            },
            Escape: clearValue,
        })
    ),
    propMap(
        props => ({
            ...props,
            onChange: props.setValue,
        })
    )
)(TextInput);
