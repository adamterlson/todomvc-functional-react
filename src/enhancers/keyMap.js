import React from 'react';

const noop = x => x;

export default (keyMap) => Component => {
    const KeyMapHOC = props => (
        <Component
            {...props}
            onKeyDown={e => (keyMap[e.key] || noop)(e, props)} />
    )

    return KeyMapHOC;
}
