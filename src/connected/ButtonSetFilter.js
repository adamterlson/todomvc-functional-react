import React from 'react';
import compose from '../compose';
import todoStore from '../store';

import Button from '../presentational/Button';

import usingStore from '../enhancers/usingStore';
import updateStore from '../enhancers/updateStore';

const ButtonSetFilter = compose(
    usingStore(
        todoStore,
        (state, { filter }) => ({
            active: state.activeFilter === filter,
        })
    ),
    updateStore(
        todoStore,
        (set, { filter }) => ({
            onClick: () => set(state => ({
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
