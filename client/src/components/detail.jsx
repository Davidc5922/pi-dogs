import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { getDetail, deleteDog,cleanDog,cleaner} from '../actions'

import { useEffect } from "react";
import { useParams,useNavigate,Link } from "react-router-dom";

import '../styles/Nav.css'
import '../styles/detail.css'
import img_dog1 from '../img/image_dog1.png'
import img_dog2 from '../img/image_dog2.png'

export default function Detail(props) {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
 
    useEffect(() => {
        dispatch(getDetail(id))
        dispatch(cleaner())
        dispatch(cleanDog())
    }, [dispatch, id])



    const myDog = useSelector((state) => state.detail)

    function handleDelete(e) {
        if (id.length > 5) {
            e.preventDefault()
            dispatch(cleanDog())
            dispatch(deleteDog(id))
            dispatch(cleaner())
            dispatch(getDetail(id))
            alert('La raza fue eliminada')
            navigate('/home')
        }else{
            alert('Solo podemos eliminar las razas creadas por usted.')
        }
    }
           

    return (
    <div className="divDetail">
        <nav className='nav' >
        <h1 className='wiki'>Wiki dogs</h1>
        <ul className='nav-ul'>
        <li> <Link to='/home'><button id="home" classdog="buttonHome1" className="button">Inicio</button></Link></li>
        <Link to='/dogs'>
            <button className="button">Crear Perro</button>
            </Link>
            <li>
            <button onClick={(e) => handleDelete(e)} className="button">Borrar Perro</button> 
            </li>
        </ul>
        </nav>
        
        

        
        {
        myDog.length > 0 ?
            <div className="deatil">
                <div >
                    <img src={myDog[0].image?myDog[0].image:"https://thumbs.dreamstime.com/b/perro-del-signo-de-interrogaci%C3%B3n-104207739.jpg"} alt={myDog[0].name} className='image' />
                </div>
                <div className="datos">
            
                <div>
                    
                    <h4 >{myDog[0].name}</h4>
                    <h4 >Altura entre: </h4>
                    <p>{myDog[0].height_Min}{isNaN(myDog[0].height_Min)!==true?'Cm':''} a {myDog[0].heigh_Max}{isNaN(myDog[0].heigh_Max)!==true?'Cm.':'.'}  </p>
                    <h4 >Peso entre:</h4>
                    <p>{myDog[0].weight_Min}{isNaN(myDog[0].weight_Min)!==true?'Kg':''} a {myDog[0].weight_Max} {isNaN(myDog[0].weight_Max)!==true?'Kg.':'.'}</p>
                    <h4 >Esperanza de vida:</h4>
                    <p >{myDog[0].life_span}</p>
                   
                </div>
                <div className="Datos">
                    <h4 >Temperamentos:</h4>
                    <ul >
                        {myDog[0].CreatedInDB ?
                            myDog[0].temperaments.map(e => {
                                return <li key={e.race_temperament.temperamentId}><label>{e.name}</label></li>
                            }) :
                            myDog[0].temperaments ?
                                myDog[0].temperaments.split(', ').map(e => {
                                    return <li key={e}><label>{e}</label></li>
                                }) :
                                'Esta raza no posee temperamentos'
                        }

                    </ul>
                </div>
                </div>
 
                
            </div> :
            <div className="loading">
                <h1 className="loading">Cargando...</h1>
            </div>
        }

    </div>
    )
}
