import React from 'react';

const noop = x => x;

export default (store, getMap = noop, setMap = noop) => Component => {
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

            return (
                <Component
                    {...props}
                    {...getProps} />
            );
        }
    };

    return WithStoreHOC;
}
