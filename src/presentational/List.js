import React from 'react';
import Container from './Container';

// TODO: UL + LI
const List = ({ renderRow, dataSource, horizontal }) => (
    <Container flexDirection={horizontal ? 'row' : 'column'}>
        {dataSource.map(
            (rowData, i) => <Container key={i}>{renderRow(rowData, i)}</Container>
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
