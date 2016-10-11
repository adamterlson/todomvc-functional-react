import React from 'react';
import store from '../store';

const noop = x => x;
const noopMerge = (a, b, c) => ({ ...a, ...b, ...c });

export default (getMap, setMap = noop, mergeMap = noopMerge) => Component => {
    class WithStoreHOC extends React.PureComponent {
        constructor(props) {
            super(props);

            this.state = store.get();
        }
        componentWillMount() {
            store.subscribe(() => this.setState(store.get()));
        }
        render() {
            const props = this.props;
            const getProps = getMap(this.state, props);
            const setProps = setMap(store.set, props);
            const mergedProps = mergeMap(getProps, setProps, props);

            return (
                <Component {...mergedProps} />
            );
        }
    };

    return WithStoreHOC;
}
