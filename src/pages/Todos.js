import React from 'react';
import RowOfItems from '../presentational/RowOfItems';
import Container from '../presentational/Container';
import Title from '../presentational/Title';
import Rotate from '../presentational/Rotate';
import Icon from '../presentational/Icon';
import TextInput from '../presentational/TextInput';

const Todos = () => (
    <Container centered>
        <Title>todos</Title>
        <Container threedee>
            <RowOfItems>
                <Rotate degrees={90}>
                    <Icon name="chevron" />
                </Rotate>
                <TextInput placeholder="What needs to be done?" />
            </RowOfItems>
        </Container>
    </Container>

);

export default Todos;
