import Card from './card'
import SearchBar from './SearchBar.jsx'
import Paginado from './Paginado'

import React,{useState} from 'react'
import {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDogs,getTemperaments,FilterTemper,filterorigin,sortByName } from '../actions'

import{Link} from"react-router-dom"


export default function Home(){

   

    const dispatch = useDispatch()
    const allDogs = useSelector((state) => state.dogs)
    const allTemperaments = useSelector((state) => state.Temperaments)
   

    const[pagina,setpagina]=useState(1)
    const[porPagina, setPorPagina]=useState(8)

    const [_orden, setOrden] = useState('')
    console.log(allDogs)
    console.log(allDogs.length )
    const maximo = Math.round(allDogs.length / porPagina);
    console.log(maximo)
    
    useEffect(() => {
        dispatch(getDogs())
    }, [dispatch])

    useEffect(() => {
        dispatch(getTemperaments())
    }, [dispatch])
    


    function handleSelect(e) {
        e.preventDefault()
        setpagina(1)
        dispatch(FilterTemper(e.target.value))
        /* if (!dog.temperaments.includes(e.target.value)) {
            setdog({
                ...dog,
                temperaments: [...dog.temperaments, e.target.value]
            })
            console.log(dog)
        } */
    }

    function handleFilterOrigin(e) {
        e.preventDefault()
        setpagina(1)
        dispatch(filterorigin(e.target.value))

    }
    function handleSortByName(e) {
        e.preventDefault();
        dispatch(sortByName(e.target.value))
        setpagina(1)
        setOrden(`Ordenado ${e.target.value}`)
    }



    function handleClick(e) {
        e.preventDefault();
        dispatch(getDogs())
    }
    return(
        <div className='Home'>
            <nav className='nav' >
                <ul>
                <button className='elementNB' onClick={e => { handleClick(e) }}>Pagina Principal</button>
                  <li> 
                    <Link to='/dogs'>
                    <button className="buttonHome1">Crear Perro</button>
                     </Link>
                 </li>
                  <li> <SearchBar /></li>
                </ul>
                <Paginado  pagina={pagina} setpagina={setpagina} maximo={maximo}    />
                <div>
                <select onChange={e => handleSelect(e)}>
                <option key={0} value='all'>Todos los Temperamentos</option>
                        {allTemperaments.sort(function (a, b) {
                                if (a.name < b.name) return -1
                                if (a.name > b.name) return 1
                                return 0
                            }).map(temp => {
                            return (
                                <option value={temp.name} key={temp.id}>{temp.name}</option>
                            )
                        })}
                    </select>

                </div>
                <div>
                <select onChange={e => handleFilterOrigin(e)}>
                            <option value="all">Todos los Perros</option>
                            <option value='api'>Nuestros Perros</option>
                            <option value='created'>Tus Perros</option>
                        </select>
                </div>
                <div>
                <select onChange={e => handleSortByName(e)}>
                            <option value="selected" hidden >Ordenado por Nombre</option>
                            <option value="ABC">A - Z</option>
                            <option value="ZYX">Z - A</option>
                        </select>
                </div>
                {
                
                allDogs.slice(
                  (pagina-1)*porPagina,  
                  (pagina-1)*porPagina+porPagina
                ).map((e) => {
                        return (
                            <div key={e.id} className='cardHome'>
                                <Link to={'/home/' + e.id} style={{ textDecoration: 'none' }}>
                                    <Card
                                        name={e.name}
                                        image={e.image}
                                        temperaments={e.temperaments}
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