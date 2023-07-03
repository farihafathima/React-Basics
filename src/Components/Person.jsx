import React from 'react'

export const Person = ({person}) => {
    return (
        <div>
            <h2>Iam {person.name}.I am {person.age} years old,and I know {person.skill} </h2>
        </div>
    )
}
