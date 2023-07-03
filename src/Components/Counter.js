import React, { Component } from 'react'

 class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    increment(){
    //  this.setState({count:this.state.count+1},()=>console.log("CallBack Value"+this.state.count))
    //  console.log(this.state.count)

    this.setState(prevState=>({
count:prevState.count+1

    }))
    }
   
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    
    render() {
        const{count}=this.state
        return (
            <div>
                <h1>Count-{count}</h1>
                <button onClick={()=>this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
