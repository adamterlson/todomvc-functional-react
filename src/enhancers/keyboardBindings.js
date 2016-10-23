import React from 'react';

export default (event, register, exec) => Component => {
    const KeyboardBindingsHOC = props => {
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

    return KeyboardBindingsHOC;
}
