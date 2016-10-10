import React from 'react';
import Card from '../presentational/Card';
import Canvas from '../presentational/Canvas';
import ComposeWith from '../presentational/ComposeWith';
import Container from '../presentational/Container';
import Icon from '../presentational/Icon';
import ListButton from '../presentational/ListButton';
import ListSelectItem from '../presentational/ListSelectItem';
import Rotate from '../presentational/Rotate';
import RowOfItems from '../presentational/RowOfItems';
import SpaceChildren from '../presentational/SpaceChildren';
import Text from '../presentational/Text';
import TextInput from '../presentational/TextInput';
import Title from '../presentational/Title';

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
                <ListSelectItem dataSource={[{ checked: false, children: 'hi' }]} />
                <Container>
                    <ComposeWith num={5} children={({ num }) => (
                        <Text>{num} items left</Text>
                    )} />
                    <ListButton dataSource={[{ children: 'foo' },{ children: 'bar' }]} horizontal />
                </Container>
            </SpaceChildren>
        </Card>
    </Canvas>

);

export default Todos;
