
import React, { Component } from 'react';
class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'CGG'
        }
        console.log('LifeCycle B ConstructorB')
    }
    
static getDerivedStateFromProps(props,state){
    console.log('LifeCycleB getDerivedStateFromPropsB')
    return null
}
//return new State or null
componentDidMount(){
    console.log('Lifecycle B ComponetDidMount()B')
}
shouldComponentUpdate(){
    console.log('LifeCycleB SholdComponenetUpadateB')
    return true
}
getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('LifeCycleB  getSnapshotBeforeUpdateB')
    return null

}
componentDidUpdate(){
    console.log('LifeCycleB componentDidUpdateB')
}
    render() {
        console.log('Life CyCLE A render()B')
        return (
            <div>
                LifeCycle B
            </div>
        )
    }
}

export default LifeCycleB