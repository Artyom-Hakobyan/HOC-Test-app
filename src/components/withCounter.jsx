import React from "react";

const EnhancedComponent = OriginalComponent => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        increment = () => {
            this.setState(prevState => {
                return { count: prevState.count + 1 }
            })
        }

        render() {
            return <OriginalComponent name="Artyom"
                count={this.state.count}
                increment={this.increment} />
        }
    }
    return NewComponent
}

export default EnhancedComponent