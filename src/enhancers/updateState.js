import React from 'react';

export default (initialState, setMap) => Component => {
    class UpateStateHOC extends React.PureComponent {
        constructor(props) {
            super(props);

            this.state = initialState;
            this.set = this.set.bind(this);
        }

        set(setter) {
            // TODO: Make this replace the entire state
            this.setState(setter(this.state));
        }

        render() {
            const props = this.props;
            const setProps = setMap(this.set, props);

            return (
                <Component
                    {...props}
                    {...this.state}
                    {...setProps} />
            );
        }
    };

    return UpateStateHOC;
}
