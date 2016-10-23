import React from 'react';
import Container from './Container';

const ListView = ({ renderRow, dataSource, horizontal }) => (
    <Container flexDirection={horizontal ? 'row' : 'column'}>
        {dataSource.map(
            (rowData, i) => <Container key={i}>{renderRow(rowData, i)}</Container>
        )}
    </Container>
);

ListView.propTypes = {
    horizontal: React.PropTypes.bool,
    renderRow: React.PropTypes.func.isRequired,
    dataSource: React.PropTypes.array.isRequired,
};

ListView.defaultProps = {
    horizontal: false,
};

export default ListView;
