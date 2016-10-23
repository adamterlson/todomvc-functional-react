import React from 'react';

const noop = x => x;

export default (store, getMap = noop) => Component => {
    class UsingStoreHOC extends React.PureComponent {
        constructor(props) {
            super(props);

            this.state = store.get();
        }
        componentWillMount() {
            this.unsubscribe = store.subscribe(() => this.setState(store.get()));
        }
        componentWillUnmount() {
            this.unsubscribe();
        }
        render() {
            const props = this.props;
            const getProps = getMap(this.state, props);

            return (
                <Component
                    {...props}
                    {...getProps} />
            );
        }
    };

    return UsingStoreHOC;
}
