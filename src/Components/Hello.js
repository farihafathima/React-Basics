import React from 'react';


export const Hello=()=>{
    // return(<div>
    //     <h1>Hello CGG</h1>
    // </div>)
    return React.createElement('div',{id:'hello',className:'hello1'},React.createElement('h1',null,'Hello CGG'))
}