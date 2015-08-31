# react-mountif
Avoid the tedious writing of conditional rendering

## Motivation
Very often while writing React code, you stumble upon the following
pattern:

```javascript
let hello;
if (this.state.show) {
    hello = <Hello />;
}
```
This is quite tedious to write and it is a very common situation. 

To avoid the boredom and keep on having fun, you can use this package, which comes in two different flavors, depending
on your bravery. ES6 classes and ES7 decorators are the new spicy ingredients you may wanna taste. Otherwise you can always fallback to an old fashioned `createClass`.

## How it works
Your component is wrapped. The wrapper's `render` function checks if either  
- `this.props.mountIf` is `false`
- `this.props.unmountIf` is `true`

In which case, the `render` method of the wrapper returns `null` and nothing is displayed. 
Otherwise it returns the wrapped component.

## Examples
### ES6 classes and ES7 decorators
```javascript
import MountIf from 'react-mountif';
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
        return (
            <div>
                <button onClick={this.handleState}>
                    Click to toggle a nice greeting
                </button>
                <HelloWorld mountIf={this.state.show} />
            </div>
        );
    }
}
```

## ES6, no classes
```javascript
import MountIf from 'react-mountif';
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
        return (
            <div>
                <button onClick={this.handleState}>
                    Click to toggle a nice greeting
                </button>
                <HelloWorld mountIf={this.state.show} />
            </div>
        );
    }
});

export default Example;
``` 
