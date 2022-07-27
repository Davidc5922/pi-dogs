import Card from './card'

import React from 'react'
//import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import { getDogs } from '../actions'


export default function LandingPage(){
    const allDogs = useSelector((state) => state.dogs)
    return(
        <div className='LandingPage'>
            {
                allDogs.map(e=>{
                    return (
                         <Card 
                    image={e.image}
                    name={e.name}
                    temperaments={e.temperaments}
                    weight={e.weight}
                    height={e.height}
                    
                    
                    />)
                   
                })
            }
        </div>
    )


}