import React from 'react';

const ConditionalMountDecorator = ComposedComponent => class extends React.Component {

    render() {
        const props = this.props;
        if (props.mountIf === false || props.unmountIf === true) {
            return null;
        } else {
            return <ComposedComponent {...props} />;
        }
    }
}

export default ConditionalMountDecorator;
