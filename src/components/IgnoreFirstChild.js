import React, { Component } from 'react'

class IgnoreFirstChild extends Component {
    render() {
        const children = this.props.children
        return (
            <div>
                {React.Children.map(children, (child, i) => {
                    if (i == 13) return
                    return child
                })}
                <p>There are {React.Children.count(this.props.children )} children</p>
            </div>
        )
    }
}

export default IgnoreFirstChild