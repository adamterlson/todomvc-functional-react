import React from 'react';
import Canvas from '../presentational/Canvas';
import ButtonList from '../presentational/ButtonList';
import ComposeWith from '../presentational/ComposeWith';
import Container from '../presentational/Container';
import Icon from '../presentational/Icon';
import Rotate from '../presentational/Rotate';
import RowOfItems from '../presentational/RowOfItems';
import Select from '../presentational/Select';
import Text from '../presentational/Text';
import TextInput from '../presentational/TextInput';
import Title from '../presentational/Title';

const Todos = () => (
    <Canvas centered>
        <Title>todos</Title>
        <Container threedee>
            <RowOfItems>
                <Rotate degrees={90}>
                    <Icon name="chevron" />
                </Rotate>
                <TextInput placeholder="What needs to be done?" />
            </RowOfItems>
            <Select dataSource={[{ checked: false, children: 'hi' }]} />
            <ComposeWith num={5} children={({ num }) => (
                <Text>{num} items left</Text>
            )} />
            <ButtonList dataSource={[{ children: 'foo' },{ children: 'bar' }]} horizontal />
        </Container>
    </Canvas>

);

export default Todos;
