import React from 'react'
import {Person} from './Person'

export const NamedList = () => {
    const names=['fariha','fathima','farisa','Neha']
    const persons=[
        {id:1,name:'fariha',age:30,skill:'Angular'},
        {id:2,name:'farisa',age:32,skill:'Java'},
        {id:3,name:'Neha',age:33,skill:'PLSql'}
    ]
    const nameList=names.map((name,index)=><h2 key={index}>{index},{name}</h2>)
    const personList=persons.map(person=><Person key={person.id} person={person}/>)
    return (
        <div>
            {/* { nameList } */}
            {personList}
        </div>
    )
}
