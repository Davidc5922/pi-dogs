import Card from './card'

import React from 'react'
//import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import { getDogs } from '../actions'


export default function LandingPage(){
    const allDogs = useSelector((state) => state.dogs)
    return(
        <div >
            <h1>Hola</h1>
            {
                allDogs.map(e=>{
                    return (
                        <div>
                            <h1>hola</h1>
                         </div>   
                        
                    )
                       
                })
            }
        </div>
    )


}

{/* 
<Card 
                    image={e.image}
                    name={e.name}
                    temperaments={e.temperaments}
                    weight={e.weight}
                    height={e.height}
                    
                    
                    />) */}