import React from "react";


export default function card({image, name, temperaments, weight_Min,weight_Max,height_Min,height_Max}){
    return(
        <>
            <img src={image} />
            <div>
                <h1>Raza</h1>
                <p>{name}</p>
                <h1>Temperamento</h1>
                <p>{temperaments}</p>
                <h1>Peso</h1>
                <p>{weight_Min}a{weight_Max}</p>
                <h1>Altura</h1>
                <p>{height_Min}a{height_Max}</p>
            </div>
        </>
    )
}