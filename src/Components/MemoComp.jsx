import React from 'react'

 const MemoComp = ({name}) => {
    console.log("**************************rendering memo() component*****************************")
    return (
   
        <div>
            {name}
        </div>
    )
}
export default React.memo(MemoComp)


//Something called higher order component React.memo()
//accepts a component and returns a new enhanced component in 
//this case a component capable of avoiding re-reders when ther is no change in props
//similar to pure components it works with functioanl component instead