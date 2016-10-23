import React from 'react';
import CAFTodos from '../connected/CAFTodos';
import Text from '../presentational/Text';
import ButtonSetFilter from '../connected/ButtonSetFilter';

const TodoStats = () => (
    <CAFTodos>
        {({ total, completed, remaining }) => (
            <Text>
                <Text><ButtonSetFilter filter="all">{total}</ButtonSetFilter> items total</Text>
                <Text>{remaining} remaining</Text>
                <Text>{completed} completed</Text>
            </Text>
        )}
    </CAFTodos>
);

export default TodoStats;
