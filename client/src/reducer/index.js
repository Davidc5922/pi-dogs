import {GETDOGS,GETTEMPERAMENTS,GETDETAIL,DELETEDDOG,SEARCH_FAIL } from '../actions'
//

const initialState = {
    dogs:[],
    allDogs:[],
    Temperaments:[],
    detatil:[],

    loader:true
}

function rootReducer (state = initialState,action){
    switch (action.type) {
        case GETDOGS:
            return {
                ...state,
                dogs: action.payload,
                allDogs: action.payload,
 
                detail: []

            }
       
            
        case GETTEMPERAMENTS:
            return {
                ...state,
                temperaments: action.payload
            }
        case GETDETAIL:
            return {
                ...state,
                detail: action.payload
            }
        case 'POST_DOGS':
            return {
                ...state,
            }
        case DELETEDDOG:
            return {
                ...state,
            }
    
        default:
<<<<<<< HEAD
            return state
=======
            return {...state}
>>>>>>> b7b69ba346d6529aff5562b58ca857c4cff25d92
    }
}

export default rootReducer