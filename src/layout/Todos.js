import React from 'react';
import Card from '../presentational/Card';
import Canvas from '../presentational/Canvas';
import ComposeWith from '../presentational/ComposeWith';
import Container from '../presentational/Container';
import Icon from '../presentational/Icon';
import Rotate from '../presentational/Rotate';
import RowOfItems from '../presentational/RowOfItems';
import SpaceChildren from '../presentational/SpaceChildren';
import Text from '../presentational/Text';
import TextInput from '../presentational/TextInput';
import Title from '../presentational/Title';

import TextInputAddTodo from '../features/TextInputAddTodo';
import WithTodos from '../features/WithTodos';
import ListSelectItemTodos from '../features/ListSelectItemTodos';
import ListButtonSetFilter from '../features/ListButtonSetFilter';

const Todos = () => (
    <Canvas centered>
        <Title>todos</Title>
        <Card>
            <SpaceChildren>
                <RowOfItems>
                    <Rotate degrees={90}>
                        <Icon name="chevron" />
                    </Rotate>
                    <TextInputAddTodo placeholder="What needs to be done?" />
                </RowOfItems>
                <ListSelectItemTodos />
                <Container>
                    <WithTodos>
                        {({ total, completed, remaining }) => (
                            <Text>
                                <Text>{total} items total</Text>
                                <Text>{remaining} remaining</Text>
                                <Text>{completed} completed</Text>
                            </Text>
                        )}
                    </WithTodos>
                    <ListButtonSetFilter horizontal />
                </Container>
            </SpaceChildren>
        </Card>
    </Canvas>

);

export default Todos;
