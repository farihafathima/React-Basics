import React, { Component } from 'react'

class ClickCounter2 extends Component {
    
    render() {
       const {count,incrementCount}=this.props
        return (
            <div>
                <button onClick={incrementCount}>Click {count}</button>
            </div>
        )
    }
}

export default ClickCounter2
