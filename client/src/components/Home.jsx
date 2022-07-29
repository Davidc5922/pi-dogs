import Card from './card'
import SearchBar from './SearchBar.jsx'

import React from 'react'
import {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDogs } from '../actions'

import{Link} from"react-router-dom"


export default function Home(){

    const dispatch = useDispatch()
    const allDogs = useSelector((state) => state.allDogs)
    console.log(allDogs)
 
    
    useEffect(() => {
        dispatch(getDogs())
    }, [dispatch])

    return(
        <div className='Home'>
            <nav className='nav' >
                <ul>
                  <li> <Link to='/home'><button id="home" className="buttonHome1">Inicio</button></Link></li>
                  <li> 
                    <Link to='/dogs'>
                    <button className="buttonHome1">Crear Perro</button>
                     </Link>
                 </li>
                  <li> <SearchBar /></li>
                </ul>
                {
                
                allDogs.map((e) => {
                        return (
                            <div key={e.id} className='cardHome'>
                                <Link to={'/home/' + e.id} style={{ textDecoration: 'none' }}>
                                    <Card
                                        name={e.name}
                                        image={e.image}
                                       /*  temperaments={e.temperaments} */
                                        /* weight={e.weight}
                                        height={e.height} */
                                        weight_Min={e.weight_Min}
                                        weight_Max={e.weight_Max}
                                        height_Min={e.height_Min}
                                        height_Max={e.heigh_Max}
                                        key={e.id}
                                    />
                                </Link>
                            </div>
                        )
                    })}
            </nav>
        </div>
    )
}