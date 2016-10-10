import React from 'react';
import Container from './Container';
import Button from './Button';

const FilterActionList = ({ filterActions }) => (
    <Container>
        {filterActions.map(
            ({ name, onPress }) => <Button onPress={onPress}>{name}</Button>
        )}
    </Container>
);

FilterActionList.propTypes = {
    filterActions: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        onPress: React.PropTypes.func.isRequired,
    })).isRequired,
};

export default FilterActionList;
