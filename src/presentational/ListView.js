import React from 'react';
import Container from './Container';

const ListView = ({ renderRow, dataSource }) => (
    <Container>
        {dataSource.map(renderRow)}
    </Container>
);

ListView.propTypes = {
    renderRow: React.PropTypes.func.isRequired,
    dataSource: React.PropTypes.array.isRequired,
};

// ListView.defaultProps = { renderRow, dataSource };

export default ListView;
