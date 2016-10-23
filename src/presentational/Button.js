import React from 'react';

import Clickable from './Clickable';
import Text from './Text';

const Button = (props) => (
    <Clickable onClick={props.onClick}>
        <Text
            children={props.children}
            padding="3px 7px"
            border={props.active ? '1px solid rgba(175, 47, 47, 0.2)' : '1px solid transparent'}
            borderRadius={3}
        />
    </Clickable>
);

Button.propTypes = {
    active: React.PropTypes.bool,
    children: React.PropTypes.node.isRequired,
    onClick: React.PropTypes.func.isRequired,
};

export default Button;
