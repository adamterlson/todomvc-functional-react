import React from 'react';
import compose from './compose';
import todoStore from '../store';

import Button from '../presentational/Button';

import withStore from '../enhancers/withStore';
import updateStore from '../enhancers/updateStore';

const ButtonSetFilter = compose(
    withStore(
        todoStore,
        (state, { filter }) => ({
            children: filter,
            active: state.activeFilter === filter,
        })
    ),
    updateStore(
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
