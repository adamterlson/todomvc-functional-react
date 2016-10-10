import React from 'react';
import Container from './Container';

const List = ({ renderRow, dataSource, horizontal }) => (
    <Container flexDirection={horizontal ? 'row' : 'column'}>
        {dataSource.map((rowData, i) => (
            <div key={rowData.key || i}>{renderRow(rowData)}</div>
        ))}
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
