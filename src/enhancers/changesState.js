import React from 'react';

const noop = x => x;

export default (store, setMap = noop) => Component => {
    class ChangesStateHOC extends React.PureComponent {
        constructor(props) {
            super(props);

            this.state = store.get();
        }
        componentWillMount() {
            store.subscribe(() => this.setState(store.get()));
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
