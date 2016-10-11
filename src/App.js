import React from 'react';
import Todos from './pages/Todos';
import store from './store';

store.set(() => ({
    todos: [
        { completed: false, description: 'Finish working'},
        { completed: true, description: 'Start working'},
    ],
    filter: 'completed',
}));

const App = () => (
    <Todos />
);

export default App;
