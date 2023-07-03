import React from 'react'

export const Hero = ({heroName}) => {
    if(heroName=='joker'){
        throw new Error('Not a hero!')
    }
    return (
        <div>
            {heroName}
        </div>
    )
}
