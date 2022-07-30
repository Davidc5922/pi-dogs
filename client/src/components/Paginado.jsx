import React,{useState} from 'react'



export default function Paginado({ pagina, setpagina, maximo }){
const[input, setInput]=useState(1)

function handleonChange(e){
    e.preventDefault()
    setInput(e.target.value)
    console.log(input) 
    console.log(e) 
}
function onKeyDown(e){
    if(e.keyCode === 13){
        if(parseInt(e.target.value )<1 ||
         parseInt(e.target.value) > maximo || /* 
         Number.isInteger(parseInt(e.target.value))|| */
         isNaN(parseInt(e.target.value))){
            setInput( 1)
        setpagina(1)
        }else{
            setpagina(parseInt(e.target.value))
       }
    }
}
const nexPage = ()=>{
    if(pagina !==maximo){
        setInput(input + 1)
        setpagina(pagina + 1)
    }else{
        alert("estas en la ultima pagina")
    }
    
}
const previous = ()=>{
    if(pagina!==1){
        setInput(input - 1)
    setpagina(pagina - 1)
    }else{
        alert("esta es la primera pagina")
    }
    
}

return (
  <div>
    <button onClick={()=>{previous()}}>-</button>
    <input name='page' type='text' value={input} onChange={e=>{handleonChange(e)}} onKeyDown={e=>{onKeyDown(e)}} />
    <p>de {maximo}</p>
    <button onClick={()=>{nexPage()}}>+</button>
  </div>
)
}