import {GETDOGS } from '../actions'

const initialState = {
    dogs:[],
    allDogs:[],
    Temperaments:[],
    detatil:[],
    loader:true
}

function rootReducer (state = initialState,action){
    switch(action.type){
        case GETDOGS:
            return{
                ...state,
                dogs:action.payload,
                allDogs:action.payload,
                detatil:[]
            }
        
        default:
            return {...state}
    }
}

export default rootReducer