import React from 'react';

const noop = x => x;

export default (store, setMap = noop) => Component => {
    class ChangesStateHOC extends React.PureComponent {
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
            const setProps = setMap(store.set, props);

            return (
                <Component
                    {...props}
                    {...setProps} />
            );
        }
    };

    return ChangesStateHOC;
}
