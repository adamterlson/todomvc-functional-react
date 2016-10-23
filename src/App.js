import React from 'react';
import ScreenTodo from './layout/ScreenTodo';
import store from './store';

store.set(() => ({
    todos: [
        {
            todoId: 'Finish working',
            completed: false,
            description: 'Finish working'
        },
        {
            todoId: 'Start working',
            completed: true,
            description: 'Start working'
        },
    ],
    filters: [
        'all',
        'active',
        'completed',
    ],
    activeFilter: 'all',
}));

const App = () => (
    <ScreenTodo />
);

export default App;
