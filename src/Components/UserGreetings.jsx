import React from 'react'

export const UserGreetings = () => {

    const isLoggedIn=false
    return (
        <div>
            {/* conditional rendering */}
            {/* <h1>WelCome {isLoggedIn?'CGG':'Guest'}</h1> */}
            <h1>Welcome {isLoggedIn&&'CGG'}</h1>
        </div>
    )
}
