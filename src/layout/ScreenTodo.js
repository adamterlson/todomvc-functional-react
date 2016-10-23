import React from 'react';
import Card from '../presentational/Card';
import Canvas from '../presentational/Canvas';
import SpaceChildren from '../presentational/SpaceChildren';
import Title from '../presentational/Title';

import ListSelectItemTodos from '../connected/ListSelectItemTodos';
import ListButtonSetFilter from '../connected/ListButtonSetFilter';

import TodoStats from './TodoStats';
import NewTodoForm from './NewTodoForm';

const Todos = () => (
    <Canvas centered>
        <Title>todos</Title>
        <Card>
            <SpaceChildren>
                <NewTodoForm />
                <ListSelectItemTodos />
                <ListButtonSetFilter horizontal />
                <TodoStats />
            </SpaceChildren>
        </Card>
    </Canvas>

);

export default Todos;
