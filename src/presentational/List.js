import React from 'react';
import Container from './Container';

const List = ({ renderRow, dataSource, horizontal }) => (
    <Container flexDirection={horizontal ? 'row' : 'column'}>
        {dataSource.map(
            (rowData, i) => renderRow({ key: i, ...rowData }, i)
        )}
    </Container>
);

List.propTypes = {
    horizontal: React.PropTypes.bool,
    renderRow: React.PropTypes.func.isRequired,
    dataSource: React.PropTypes.array.isRequired,
};

List.defaultProps = {
    horizontal: false,
};

export default List;
