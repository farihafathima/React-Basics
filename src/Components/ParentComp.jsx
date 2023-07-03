import React, { Component } from 'react'
import PureComponenets from './PureComponenets'
import RegularComponent from './RegularComponent'
import MemoComp from './MemoComp';

 class ParentComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'CGG'
        };
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'CGG'
            })
        },2000)
    }
    render() {
        console.log('*****************************************************Parent comp Render***************************************')
        return (
            <div>
                Parent component
                {/* <PureComponenets name={this.state.name} />
                <RegularComponent name={this.state.name}/> */}
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
//when the parent re-renders MemoComp also re-renders but the name propis going to stay the same with every re-render
//so we nwwd a way to avoid re-rendering this memo form functional componentwe can do that using React.memo()



//props are not changing so its better to avoid re-rendering MemoComp