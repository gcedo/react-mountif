import MountIf from '../../lib';
import React from 'react';

let HelloWorld = React.createClass({
    render() {
        return <div>Hello World</div>;
    }
});

HelloWorld = MountIf(HelloWorld);

const Example = React.createClass({
    getInitialState() {
        return { show: false };
    },

    handleState() {
        this.setState({ show: !this.state.show });
    },

    render() {
        const status = this.state.show ? 'success' : 'danger';
        return (
            <div>
                <div>
                    <code>this.state.show</code>:
                    <span className={`label label-${status}`}>
                        {Boolean(this.state.show).toString()}
                    </span>
                </div>
                <hr/>
                <button onClick={this.handleState} className="btn btn-primary">
                    Click to toggle a nice greeting
                </button>
                <HelloWorld mountIf={this.state.show} />
            </div>
        );
    }
});

export default Example;
