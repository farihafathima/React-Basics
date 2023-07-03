import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'CGG'
        }
        console.log('LifeCycle A Constructor')
    }
    
static getDerivedStateFromProps(props,state){
    console.log('LifeCycle AgetDerivedStsteFromPropsA')
    return null
}
//return new State or null
componentDidMount(){
    console.log('Lifecycle A ComponetDidMount()A')
}
shouldComponentUpdate(){
    console.log('LifeCycleA SholdComponenetUpadateA')
    return true
}
getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('LifeCycleA  getSnapshotBeforeUpdateA')
    return null

}
componentDidUpdate(){
    console.log('LifeCycleA componentDidUpdateA')
}
changeState=()=>{
    this.setState({
        name:'CGG Gachibowli'
    })
}
    render() {
        console.log('Life CyCLE A render(')
        return (
            <div>
                LifeCycle A
                <br/>
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA
