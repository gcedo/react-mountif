import MountIf from '../../lib';
import React from 'react';

@MountIf
class HelloWorld extends React.Component {
    render() {
        return <div>Hello World</div>;
    }
}

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false };
    }

    handleState = () => {
        this.setState({ show: !this.state.show });
    }

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
}

export default Example;
