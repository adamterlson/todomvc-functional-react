import React from 'react';
import Rotate from '../presentational/Rotate';
import RowContainer from '../presentational/RowContainer';
import Icon from '../presentational/Icon';

import TextInputAddTodo from '../connected/TextInputAddTodo';

const NewTodoForm = () => (
    <RowContainer>
        <Rotate degrees={90}>
            <Icon name="chevron" />
        </Rotate>
        <TextInputAddTodo placeholder="What needs to be done?" />
    </RowContainer>
);

export default NewTodoForm;
