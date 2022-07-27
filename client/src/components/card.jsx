import React from "react";


export default function card({image, name, temperaments, weight,height}){
    return(
        <div className="Card">
            <img src={image} />
            <div>
                <p>{name}</p>
                <p>{temperaments}</p>
                <p>{weight}</p>
                <p>{height}</p>
            </div>
        </div>
    )
}