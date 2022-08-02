import Card from './card'
import SearchBar from './SearchBar.jsx'


import React,{useState} from 'react'
import{Link} from"react-router-dom"
import {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postDogs,getTemperaments } from '../actions'

import '../styles/Nav.css'
import '../styles/DogCreate.css'





function validate(input) {
    let errors = {}
    if (!input.name) {
        errors.name = 'Necesitas asignarle un nombre a la raza'
    }

    else if (!input.name.length > 30) {
        errors.name = 'El nombre es muy largo, no podria recordarlo'
    }

    else if (!input.height_Min) {
        errors.height_Min = 'Necesitamos de una altura minima'
    }

    else if (isNaN(parseInt(input.height_Min))) {
        errors.height_Min = 'Por favor, colocalo en numeros para que pueda entenderte'
    }

    else if (input.height_Min <= 0) {
        errors.height_Min = 'Es tan pequeño que no se ve, coloca un valor superior a 0'
    }

    else if (!input.height_Max) {
        errors.height_Max = 'Todo tiene un limite, coloca un valor de altura maximo, por favor'
    }

    else if (isNaN(parseInt(input.height_Max))) {
        errors.height_Max = 'Por favor, colocalo en numeros para que pueda entenderte'
    }

    else if (input.height_Max > 200) {
        errors.height_Max = 'Recuerde que hablamos de razas de perro, Es muy grande'
    }

    else if (parseInt(input.height_Min) >= parseInt(input.height_Max)) {
        errors.height_Min = 'Creo que el tamaño minimo deberia ser menor que el tamaño maximo'
    }

    else if (!input.weight_Min) { errors.weightMin = 'Necesitamos un peso minimo' }

    else if (isNaN(parseInt(input.weight_Min))) {
        errors.weight_Min = 'Por favor, colocalo en numeros para que pueda entenderte'
    }

    else if (input.weight_Min <= 0) {
        errors.weight_Min = 'Eso si que es ser liviano!!, el peso deberia ser mayor a 0'
    }

    else if (!input.weight_Max) { errors.weight_Max = 'Deberias especificar un peso maximo' }

    else if (isNaN(parseInt(input.weight_Max))) {
        errors.weight_Max = 'Por favor, colocalo en numeros para que pueda entenderte'
    }

    else if (input.weightMax > 200) {
        errors.heightMax = 'No somos de juzgar a nadie, pero creo que tu raza es de dinosaurios y no de perros, coloca un valor mas pequeño'
    }

    else if (parseInt(input.weightMin) >= parseInt(input.weightMax)) {
        errors.weightMin = 'El peso maximo deberia ser el mas grande'
    }

    else if (!input.life_span) {
        errors.life_span = 'No nos gusta ni pensarlo, pero necesitamos saber su esperanza de vida'
    }

    else if (input.life_span > 30) {
        errors.life_span = 'Quisieramos que fueran eternos, pero no podemos cambiar la realidad'
    }

    else if (input.life_span <= 0) {
        errors.life_span = 'Su esperanza de vida es demasiado corta, deberia ser mayor que 0'
    }

    else if (isNaN(parseInt(input.life_span))) {
        errors.life_span = 'Por favor, colocalo en numeros para que pueda entenderte'
    }
   

    return errors
}

export default function DogCreate(){
    const allTemperaments = useSelector((state) => state.Temperaments)
    
   
    const [err, setErr] = useState({})
    const [dog, setdog] = useState({
        name:"", 
        height_Min:"", 
        height_Max:"",
        weight_Min:"",
        weight_Max:"",
        life_span:"",
        image: '',
        temperaments: []});

   const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTemperaments())
    }, [dispatch])


   function handleonChange(e){
    e.preventDefault()
    setdog({...dog,[e.target.name]:e.target.value})
    setErr(validate({
        ...dog,
        [e.target.name]: e.target.value,
    }))
    }
   
    function handleDeleteTemperament(e) {
        console.log(e)

        setdog({
            ...dog,
            temperaments: dog.temperaments.filter(temp => temp !== e)
        })
    }  

    function handleSelect(e) {
        e.preventDefault()
        if (!dog.temperaments.includes(e.target.value)) {
            setdog({
                ...dog,
                temperaments: [...dog.temperaments, e.target.value]
            })
            console.log(dog)
        }
    }

    
    function handleSubmit(e){
        
        if (!Object.getOwnPropertyNames(err).length && dog.name && dog.height_Min && dog.height_Max && dog.weight_Min && dog.weight_Max && dog.life_span ) {
       
        e.preventDefault()
        console.log(dog)
        dispatch(postDogs(dog))
        alert('Se creo una nueva raza')
        setdog({
        name:"", 
        height_Min:"", 
        height_Max:"",
        weight_Min:"",
        weight_Max:"",
        life_span:"",
        image: '',
        temperaments: []})
        }else{
            alert('No se creo el perro')
        }

    } 

    
    



   



   
    return(
        <div>
<nav className='nav' >
            <h1 className='wiki'>Wiki dogs</h1>
            <ul className='nav-ul'>
            <li> <Link to='/home'><button id="home" classdog="buttonHome1" className="button">Inicio</button></Link></li>
             </ul>
            </nav>

            <div className='contenedor'>
                <h2>Crear Perro</h2>
            <form onSubmit={e=>handleSubmit(e)}>
                <div className='Perro'>
                    <input  value={dog.name} name="name" onChange={e=>handleonChange(e)} autoComplete='off'></input>
                    {err.name && (
                        <p className="error">{err.name}</p>
                    )}
                    <label>Raza</label>
                </div>
                <div className='Perro'>
                    
                    <input  value={dog.height_Min} name="height_Min" type="text" onChange={e=>handleonChange(e)} autoComplete='off'></input> 
                    {err.height_Min && (
                        <p className="error">{err.height_Min}</p>
                    )}  
                    <label>altura minima </label>
                </div>
                <div className='Perro'>
                    
                    <input value={dog.height_Max}  name="height_Max" type="text" onChange={e=>handleonChange(e)} autoComplete='off'></input>
                    {err.height_Max && (
                        <p className="error">{err.height_Max}</p>
                    )}
                    <label>altura maxima</label>
                </div>
                <div className='Perro'>
                    
                    <input  value={dog.weight_Min}  name="weight_Min" type="text" onChange={e=>handleonChange(e)} autoComplete='off'></input>
                    {err.weight_Min && (
                        <p className="error">{err.weight_Min}</p>
                    )}
                    <label>peso minimo </label>
                </div>
                <div className='Perro'>
                    
                    <input  value={dog.weight_Max} name="weight_Max" type="text" onChange={e=>handleonChange(e)} autoComplete='off'></input>
                    {err.weight_Max && (
                        <p className="error">{err.weight_Max}</p>
                    )}
                    <label>peso maximo </label>
                </div>
                <div className='Perro'>
                    
                    <input value={dog.life_span} name="life_span" type="text" onChange={e=>handleonChange(e)} autoComplete='off'></input>
                    {err.life_span && (
                        <p className="error">{err.life_span}</p>
                    )}
                    <label>años de vida</label>
                </div>
                <div className='Perro'>
                    
                    <input value={dog.image} name="image" type="text" onChange={e=>handleonChange(e)} autoComplete='off'></input>
                    {err.name && (
                        <p className="error">{err.name}</p>
                    )}
                    <label>imagen</label>
                </div>
               
                <div >
                    <select onChange={e => handleSelect(e)} className="List_temper">
                        <option value='selected' hidden className='List_temper_option'>Temperamentos</option>
                        {allTemperaments.sort(function (a, b) {
                            if (a.name < b.name) return -1
                            if (a.name > b.name) return 1
                            return 0
                        }).map(temp => {
                            return (
                                <option value={temp.name} key={temp.id} className='List_temper_option'>{temp.name}</option>
                            )
                        })}
                    </select>
                    <div className='all_Temper'>
                    {dog.temperaments.map(e => {
                        return (
                            <ul classdog="allSelecction" key={e}>
                                <li>
                                <button onClick={() => {handleDeleteTemperament(e)}} className="x">X</button>
                                    <p classdog="selecction" className='Name_Temperament'>{e}</p>
                                    
                                </li>
                            </ul>
                        )
                    })}
                    </div>
                    
                    <div>
                    {/*  */}
                    
                </div>
                
                
                </div>
          
                
                <button type='submit' className='button'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>            
                    Create Product</button>
             </form>
            </div>
                
            
        </div>
    )
}