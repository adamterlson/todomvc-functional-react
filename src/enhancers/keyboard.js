import React from 'react';

const noop = x => x;

export default (event, register, exec) => Component => {
    const KeyboardHOC = props => {
        // if (typeof onKeyDown === 'function') {
        // if (false) {
        //     const keyfn = onKeyDown(props);
        //     return (
        //         <Component
        //             {...props}
        //             onKeyDown={
        //                 e => {
        //                     props.onKeyDown && props.onKeyDown(e);
        //                     return (keyfn[e.key] || noop)(e.target.value, props, e);
        //                 }
        //             } />
        //     );
        // }
        const cbs = [];

        const on = (key, handler) => {
            const cb = e => {
                if (e.key === key) {
                    handler(e.target.value);
                }
                if (e.keyCode === key) {
                    handler(e.target.value);
                }
            };

            cbs.push(cb);

            return cb;
        };

        register(on, props);

        const eventCallback = (e) => cbs.forEach(cb => cb(e))

        return (
            <Component
                {...props}
                {...{[event]: eventCallback}} />
        );
    }

    return KeyboardHOC;
}
