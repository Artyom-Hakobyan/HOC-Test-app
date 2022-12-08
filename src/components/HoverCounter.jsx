import React, { Component } from 'react';
import EnhancedComponent from './withCounter';

class HoverCounter extends Component {
    render() {
        const { count, increment } = this.props
        return (
            <div style={{backgroundColor: "#03fcc6"}}>
                <h1 onMouseOver={increment}>{this.props.name} hovered: {count} times</h1>
            </div>
        );
    }
}

export default EnhancedComponent(HoverCounter);