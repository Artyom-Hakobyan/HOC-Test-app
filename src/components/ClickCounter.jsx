import React, { Component } from 'react';
import EnhancedComponent from './withCounter';

class ClickCounter extends Component {
    render() {
        const { count, increment } = this.props
        return (
            <div>
                <button onClick={increment}>{this.props.name} clicked:{count} times</button>
            </div>
        );
    }
}

export default EnhancedComponent(ClickCounter);