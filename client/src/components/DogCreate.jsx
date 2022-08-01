import Card from './card'
import SearchBar from './SearchBar.jsx'


import React,{useState} from 'react'
import{Link} from"react-router-dom"
import {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postDogs,getTemperaments } from '../actions'

import '../styles/Nav.css'



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


    /*else if (!isNaN(input.bredFor)){
        errors.bredFor = 'Solo se admite texto'
        
    }
    */
    return errors
}

export default function DogCreate(){
    const allTemperaments = useSelector((state) => state.Temperaments)
    
    const [temper,settemper]=useState("")
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
   
  

    
    function handleSubmit(e){
        
        if (!Object.getOwnPropertyNames(err).length && dog.name && dog.height_Min && dog.height_Max && dog.weight_Min && dog.weight_Max && dog.life_span /*&& input.temperaments.length*/ /*&& input.origins.length*/) {
       if(!dog.image){
            setdog({...dog,image:"https://thumbs.dreamstime.com/b/perro-del-signo-de-interrogaci%C3%B3n-104207739.jpg"})
        }
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

    function handleDeleteTemperament(e) {
        e.preventDefault()
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
    function handletemper(e){
        e.preventDefault()
        settemper(e.target.value)
        console.log(temper)
    }
    function handlenewtemper(e){
        e.preventDefault()
        if (!dog.temperaments.includes(temper)) {
            setdog({
                ...dog,
                temperaments: [...dog.temperaments, temper]
            })
            console.log(dog)
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

    
                
            <form onSubmit={e=>handleSubmit(e)}>
                <div>
                    <label>Raza: </label>
                    <input  value={dog.name} name="name" onChange={e=>handleonChange(e)} autoComplete='off'></input>
                    {err.name && (
                        <p className="error">{err.name}</p>
                    )}
                </div>
                <div>
                    <label>heightMin: </label>
                    <input  value={dog.height_Min} name="height_Min" type="text" onChange={e=>handleonChange(e)}></input> 
                    {err.height_Min && (
                        <p className="error">{err.height_Min}</p>
                    )}  
                </div>
                <div>
                    <label>heightMax: </label>
                    <input value={dog.height_Max}  name="height_Max" type="text" onChange={e=>handleonChange(e)}></input>
                    {err.height_Max && (
                        <p className="error">{err.height_Max}</p>
                    )}
                </div>
                <div>
                    <label>weightMin: </label>
                    <input  value={dog.weight_Min}  name="weight_Min" type="text" onChange={e=>handleonChange(e)}></input>
                    {err.weight_Min && (
                        <p className="error">{err.weight_Min}</p>
                    )}
                </div>
                <div>
                    <label>weightMax: </label>
                    <input  value={dog.weight_Max} name="weight_Max" type="text" onChange={e=>handleonChange(e)}></input>
                    {err.weight_Max && (
                        <p className="error">{err.weight_Max}</p>
                    )}
                </div>
                <div>
                    <label>life_span:</label>
                    <input value={dog.life_span} name="life_span" type="text" onChange={e=>handleonChange(e)}></input>
                    {err.life_span && (
                        <p className="error">{err.life_span}</p>
                    )}
                </div>
                <div>
                    <label>image:</label>
                    <input value={dog.image} name="image" type="text" onChange={e=>handleonChange(e)}></input>
                    {err.name && (
                        <p className="error">{err.name}</p>
                    )}
                </div>
                
                
                <div>
                    <select onChange={e => handleSelect(e)}>
                        <option value='selected' hidden >Temperamentos</option>
                        {allTemperaments.map(temp => {
                            return (
                                <option value={temp.name} key={temp.id}>{temp.name}</option>
                            )
                        })}
                    </select>
                    {dog.temperaments.map(e => {
                        return (
                            <ul classdog="allSelecction" key={e}>
                                <li>
                                    <p classdog="selecction"><strong>{e}</strong></p>
                                    <button onClick={() => handleDeleteTemperament(e)} classdog='x'>X</button>
                                </li>
                            </ul>
                        )
                    })}
                    <div>
                    <label>crea un temperamento:</label>
                    <input value={temper} type="text" onChange={e=>handletemper(e)}></input>
                    <button onClick={e=>{handlenewtemper(e)}}>+</button>
                    </div>
                
                </div>
                
                <button type='submit'>Create Product</button>
             </form>
        </div>
    )
}