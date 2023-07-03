import React, { Component } from 'react'

export class RefDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef=React.createRef()

        //1.
        this.cbRef=null
        //2.
        this.setCbRef=element=>this.cbRef=element
        //3.
    }
    clickHandler=()=>{
       alert(this.inputRef.current.value)
    }
    //What exactly does this.inputRef holds 
    //inputRef holds an object after the refernce is created 
    //current points to the actuall dom node 
    componentDidMount(){
        // console.log(this.inputRef)
        // this.inputRef.current.focus()
        //React will call ref callback with the dom element when the componenet mounts 
        //will null when component unmount

        if(this.cdRef){
            this.cdRef.focus()
        }
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                {/* 4. */}
                <input type="text" ref={this.setCbRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

//Refs makes it possile to access som nodes directly within react

//as soon as the page loads the input feild should get focused
//1.using ref this can be done in 3 steps 
//1.create a ref-React.createRef().common to create  ref in constructor
//2.attach this ref to the input elemnt in the render method and to attach ref we make use of the reserved ref attribute
//we now have the reference to the input element
//3.To Call focus() method on this input element 



