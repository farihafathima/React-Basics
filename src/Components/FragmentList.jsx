import React, { Fragment } from 'react'
import { ChildList } from './ChildList'

export const FragmentList = () => {
    const arr=[{
        id:1,
        title:'java',
        body:'Java for Beginners'
    },{
        id:2,
        title:'c',
        body:'Let US c'
    }]
    const objList=arr.map(item=>{
      return(<ChildList key={item.id} item={item}/>)
    })
    return (
        <>
            {objList}
       </>
    )
}
