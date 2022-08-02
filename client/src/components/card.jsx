import React from "react";
import '../styles/card.css'


export default function card({image, name, temperaments, weight_Min,weight_Max,height_Min,height_Max}){
    return(
        <div className="content">
            <img src={image?image:"https://thumbs.dreamstime.com/b/perro-del-signo-de-interrogaci%C3%B3n-104207739.jpg"} className="img" />
            <div className="info_dog">
                <div className="name_temper">
                        <div className="name">
                        <h1>Raza</h1>
                        <p>{name}</p>
                        </div>  

                        <div className="temper">

                            <h1>Peso</h1>
                            <p>{weight_Min}{isNaN(weight_Min)!==true?"Kg":""} a {weight_Max} {isNaN(weight_Max)!==true?"Kg":""}</p>
                            <h1>Altura</h1>
                            <p>{height_Min}{isNaN(height_Min)!==true?"Cm":""} a {height_Max} {isNaN(height_Max)!==true?"Cm":""}</p>
                            
                     </div>    
                </div>   
                <h1>Temperamento</h1>
                <p>{typeof temperaments!=='object' ? temperaments :temperaments.map(e=>{return e.name}) }</p>
               
            </div>
        </div>
    )
}