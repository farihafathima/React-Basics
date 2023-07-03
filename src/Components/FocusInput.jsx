import React, { Component } from 'react'
import InputComponent from './InputComponent'

 class FocusInput extends Component {
    constructor(props) {
        super(props)
    
       //1.
       this.componentRef=React.createRef()
       
    }
    clickHandler=()=>{
        this.componentRef.current.focusInput()
    }
    
    render() {
        return (
            <div>
               <InputComponent ref={this.componentRef}/>
               <button onClick={this.clickHandler}>Focus Input</button>

            </div>
        )
    }
}

export default FocusInput
