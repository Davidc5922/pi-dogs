import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogs } from "../actions";
import '../styles/SearchBar.css'
import icono from '../img/icono.jpg'
import icono2 from '../img/icono2.png'


export default function SearchBar(){

    const dispatch = useDispatch()
    const [name , setName] = useState('')

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }

    function handleSubmit(e){
        e.preventDefault()
        var found = getDogs(name)
        if(!name){
            return alert('Debe ingresar nombre')
        }
        dispatch(found)
        setName(' ')
    }
    function handleBack(e){
        e.preventDefault()
        setName(' ')
        var found = getDogs(name)
        dispatch(found)
    }
    
    return(
        <div className="SearchBar">
            <button
                type='submit'
                onClick={e=> handleSubmit(e)}
                className='fetch'
                >
                 <img src={icono} className='img_icono' />
             </button>
            <input
                type='text' 
                placeholder='Busca tu raza favorita'
                onChange={e => handleInputChange(e)}
                value={name}
                className='input'
                onKeyPress={e=> e.key === 'Enter' && handleSubmit(e)}
                />
            
            <button
                type='submit'
                onClick={e=> handleBack(e)}
                className='fetch'
                >
                <img src={icono2} className='img_icono2' />
                </button>
                

            
        </div>
    )
}