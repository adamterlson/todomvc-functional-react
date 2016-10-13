import React from 'react';
export default cb => Component => {
    class WithPropsHOC extends React.PureComponent {
        render() {
            const props = this.props;
            const Foo = cb(props)(Component);
            return <Foo {...props} key={this.key} />
        }
    }

    return WithPropsHOC;
};
