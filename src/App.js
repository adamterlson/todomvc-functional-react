import React from 'react';
import Todos from './layout/Todos';
import store from './store';

store.set(() => ({
    todos: [
        { completed: false, description: 'Finish working'},
        { completed: true, description: 'Start working'},
    ],
    filters: [
        'active',
        'all',
        'completed',
    ],
    activeFilter: 'completed',
}));

const App = () => (
    <Todos />
);

export default App;
