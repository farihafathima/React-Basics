import React from 'react'

export const ChildComponent = ({greetHandler}) => {
    return (
        <div>
           <button onClick={()=>greetHandler('child')}>GreetParent</button> 
        </div>
    )
}
