import React from 'react';
import compose from './compose';
import todoStore from '../store';

import Button from '../presentational/Button';

import withState from '../enhancers/withState';
import changesState from '../enhancers/changesState';

const ButtonSetFilter = compose(
    withState(
        todoStore,
        (state, { filter }) => ({
            children: filter,
            active: state.activeFilter === filter,
        })
    ),
    changesState(
        todoStore,
        (set, { filter }) => ({
            onPress: () => set(state => ({
                ...state,
                activeFilter: filter,
            }))
        })
    ),
)(Button);

ButtonSetFilter.propTypes = {
    filter: React.PropTypes.string.isRequired,
};

export default ButtonSetFilter;
