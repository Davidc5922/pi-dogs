import Card from './card'
import SearchBar from './SearchBar.jsx'


import React from 'react'
import{Link} from"react-router-dom"
import {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postDogs,getTemperaments } from '../actions'


export default function DogCreate(){
    const allTemperaments = useSelector((state) => state.Temperaments)
    
    const [temper,settemper]=React.useState("")
    const [dog, setdog] = React.useState({
        name:"", 
        heightMin:"", 
        heightMax:"",
        weightMin:"",
        weightMax:"",
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
    }

    
    function handleSubmit(e){
        e.preventDefault()
        console.log(dog)
        dispatch(postDogs(dog))
        alert('Se creo una nueva raza')
        setdog({
        name:"", 
        heightMin:"", 
        heightMax:"",
        weightMin:"",
        weightMax:"",
        life_span:"",
        image: '',
        temperaments: []})

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
             <ul>
                  <li> <Link to='/home'><button id="home" classdog="buttonHome1">Inicio</button></Link></li>
                </ul>
            <form onSubmit={e=>handleSubmit(e)}>
                <div>
                    <label>Raza: </label>
                    <input  value={dog.name} name="name" onChange={e=>handleonChange(e)}></input>
                </div>
                <div>
                    <label>heightMin: </label>
                    <input  value={dog.heightMin} name="heightMin" type="text" onChange={e=>handleonChange(e)}></input>   
                </div>
                <div>
                    <label>heightMax: </label>
                    <input value={dog.heightMax}  name="heightMax" type="text" onChange={e=>handleonChange(e)}></input>
                </div>
                <div>
                    <label>weightMin: </label>
                    <input  value={dog.weightMin}  name="weightMin" type="text" onChange={e=>handleonChange(e)}></input>
                </div>
                <div>
                    <label>weightMax: </label>
                    <input  value={dog.weightMax} name="weightMax" type="text" onChange={e=>handleonChange(e)}></input>
                </div>
                <div>
                    <label>life_span:</label>
                    <input value={dog.life_span} name="life_span" type="text" onChange={e=>handleonChange(e)}></input>
                </div>
                <div>
                    <label>image:</label>
                    <input value={dog.image} name="image" type="text" onChange={e=>handleonChange(e)}></input>
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