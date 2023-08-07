import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContex'

 class ComponentE extends Component {
    static contextType=UserContext
    render() {
        return (
            <div>
                {/* in the render method context value is available as this.context  */}
                Component E Context:{this.context}
                <ComponentF/>
            </div>
        )
    }
}

export default ComponentE

//Assign usercontext to the contextType property on the class

//ComponentE.contextType=UserContext

//Limitations
//1.Works only with class Component
//2.you can subscribe to only a single context using contextType
//3.Many a times in your application you need to read morethan ane context in which sineario consumer component is the way to go
