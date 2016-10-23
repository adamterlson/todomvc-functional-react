import React from 'react';
import Card from '../presentational/Card';
import Canvas from '../presentational/Canvas';
import Container from '../presentational/Container';
import Icon from '../presentational/Icon';
import Rotate from '../presentational/Rotate';
import RowContainer from '../presentational/RowContainer';
import SpaceChildren from '../presentational/SpaceChildren';
import Text from '../presentational/Text';
import Title from '../presentational/Title';

import TextInputAddTodo from '../connected/TextInputAddTodo';
import CAFTodos from '../connected/CAFTodos';
import ListSelectItemTodos from '../connected/ListSelectItemTodos';
import ListButtonSetFilter from '../connected/ListButtonSetFilter';
import ButtonSetFilter from '../connected/ButtonSetFilter';

const Todos = () => (
    <Canvas centered>
        <Title>todos</Title>
        <Card>
            <SpaceChildren>
                <RowContainer>
                    <Rotate degrees={90}>
                        <Icon name="chevron" />
                    </Rotate>
                    <TextInputAddTodo placeholder="What needs to be done?" key="wtf" />
                </RowContainer>
                <ListSelectItemTodos />
                <Container>
                    <CAFTodos>
                        {({ total, completed, remaining }) => (
                            <Text>
                                <Text><ButtonSetFilter filter="all">{total}</ButtonSetFilter> items total</Text>
                                <Text>{remaining} remaining</Text>
                                <Text>{completed} completed</Text>
                            </Text>
                        )}
                    </CAFTodos>
                    <ListButtonSetFilter horizontal />
                </Container>
            </SpaceChildren>
        </Card>
    </Canvas>

);

export default Todos;
