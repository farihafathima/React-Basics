import React from 'react'
import './Mystyles.css'

export const StyleSheets = (props) => {
    let className=props.primary?'primary':'secondary'
    return (
        <div>
            <h1 className={`${className} font-xl`}>StyleSheets</h1>
        </div>
    )
}
