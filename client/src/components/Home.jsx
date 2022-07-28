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
 
    
    useEffect(() => {
        dispatch(getDogs())
    }, [dispatch])

    return(
        <div className='Home'>
            <nav className='nav' >
                <ul>
                  <li> <Link to="/Home">lista de perros</Link> </li>
                  <li> <Link to="/dogs">crear un perro</Link> </li>
                  <li> <Link to="/home/:id">detalles sobre los perros</Link> </li>
                  <li> <SearchBar /></li>
                </ul>
                {allDogs.map((e) => {
                        return (
                            <div key={e.id} className='cardHome'>
                                <Link to={'/home/' + e.id} style={{ textDecoration: 'none' }}>
                                    <Card
                                        name={e.name}
                                        image={e.image}
                                        temperaments={e.temperaments}
                                        /* weight={e.weight}
                                        height={e.height} */
                                       
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