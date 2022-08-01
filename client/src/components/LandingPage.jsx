

import React from 'react'


import{Link} from"react-router-dom"


export default function LandingPage(){
  
    return(
        <div className='landing'>
            <Link to="/Home">{/* <button hidden>/learn react/i</button> */}<button>Home</button></Link>
         
        </div>
    )


}

