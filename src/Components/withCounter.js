import React, { Component } from 'react'
const withCounter=(WrappedComponent,incrementNow)=>{
   class WithCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    incrementCount=()=>{
        this.setState(prevState=>{
            return{
                count:prevState.count+incrementNow
            }
        })
    }
        render() {
            console.log(this.props.name)
            return (
               <WrappedComponent count={this.state.count}
               incrementCount={this.incrementCount}
               {...this.props}/>
            )
        }
    }
    
    
  return WithCounter 
}
export default withCounter