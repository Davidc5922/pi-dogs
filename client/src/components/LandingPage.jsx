

import React from 'react'
import '../styles/Landing.css'


import{Link} from"react-router-dom"


export default function LandingPage(){
  
    return(
        <div className='landing'>
            <Link to="/Home">
                     
                {/* <button hidden>/learn react/i</button> */}
                <button className='button_Home'>bienvenido a Wiki dogs</button>
                </Link>
         
        </div>
    )


}

