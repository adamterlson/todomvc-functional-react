import React from 'react';
import Text from '../presentational/Text';
import Container from '../presentational/Container';
import RowContainer from '../presentational/RowContainer';

import CAFTodos from '../connected/CAFTodos';
import ButtonSetFilter from '../connected/ButtonSetFilter';

const TodoStats = () => (
    <CAFTodos>
        {({ total, completed, remaining }) => (
            <RowContainer justifyContent="space-between">
                <Text>
                    Total:
                    <ButtonSetFilter filter="all">{total}</ButtonSetFilter>
                </Text>
                <Text>
                    Remaining:
                    <ButtonSetFilter filter="active">{remaining}</ButtonSetFilter>
                </Text>
                <Text>
                    Completed:
                    <ButtonSetFilter filter="completed">{completed}</ButtonSetFilter>
                </Text>
            </RowContainer>
        )}
    </CAFTodos>
);

export default TodoStats;
