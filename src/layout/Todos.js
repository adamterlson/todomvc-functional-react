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

import ListSelectItemTodos from '../features/ListSelectItemTodos';
import ListButtonSetFilter from '../features/ListButtonSetFilter';
import SelectItemTodo from '../features/SelectItemTodo';

const Todos = () => (
    <Canvas centered>
        <Title>todos</Title>
        <Card>
            <SpaceChildren>
                <RowOfItems>
                    <Rotate degrees={90}>
                        <Icon name="chevron" />
                    </Rotate>
                    <TextInput placeholder="What needs to be done?" />
                </RowOfItems>
                <ListSelectItemTodos
                    renderRow={(rowData) => <SelectItemTodo {...rowData} />}
                />
                <Container>
                    <ComposeWith num={5} children={({ num }) => (
                        <Text>{num} items left</Text>
                    )} />
                    <ListButtonSetFilter horizontal />
                </Container>
            </SpaceChildren>
        </Card>
    </Canvas>

);

export default Todos;
