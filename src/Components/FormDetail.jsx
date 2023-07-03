import React from 'react'
import  { useState } from 'react'

export const FormDetail = () => {
    const[data,setData]=useState({
        name:'',
        subscribe:'no',
        remarks:''
    })
const changeHandler=(e,feild)=>{
    setData({...data,[feild]:e.target.value})
}
const handleSubmit=e=>{
    e.preventDefault();
    alert(`Form Data is 
            Name:${data.name} 
            Subscribe:${data.subscribe} 
            Remarks:${data.remarks}` )
}

    return (
        <form onSubmit={handleSubmit}>
             <div>
             <label>Name:</label>
           <input type='text'  value={data.name} onChange={(e=>changeHandler(e,'name'))}/>
          
       </div>

        <div>
           
            <input type='radio' name='radio' value='Yes'onChnage={(e=>changeHandler(e,'subscribe'))} />
            <label>Yes</label>
        </div>
        <div>
           
            <input type='radio' value='No' onChnage={(e=>changeHandler(e,'subscribe'))} checked={data.subscribe='No'}/>
            <label>No</label>
        </div>
        <div>
            <textarea row='10' height='150px' value={data.remarks}  onChange={(e=>changeHandler(e,'remarks'))}></textarea>
        </div>
           <button>Submit</button>
        </form>
    )
}
