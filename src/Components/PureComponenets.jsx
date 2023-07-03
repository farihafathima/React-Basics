import React, { PureComponent } from 'react'

 class PureComponenets extends PureComponent {
    render() {
        console.log('PURE COMP RENDER')
        return (
           
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComponenets
