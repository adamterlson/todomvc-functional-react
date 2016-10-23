import updateStore from './updateStore';
import store from '../store';

/* eslint-disable no-mixed-operators */
// Taken from
// https://github.com/tastejs/todomvc/blob/gh-pages/examples/react/js/utils.js
const uuid = function () {
    var i, random;
    var uuid = '';

    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            uuid += '-';
        }
        uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
            .toString(16);
    }

    return uuid;
};
/* eslint-enable no-mixed-operators */

const createTodo = description => state => ({
    ...console.tap(state),
    todos: [
        ...state.todos,
        {
            todoId: uuid(),
            description
        }
    ],
});

export default propMap =>
    updateStore(
        store,
        set => propMap(
            (description) =>
                set(createTodo(description))
        )
    );
