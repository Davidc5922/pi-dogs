import {GETDOGS,GETTEMPERAMENTS,GETDETAIL,DELETEDDOG,SEARCH_FAIL,CLEANER,CLEAN_DOG  } from '../actions'
//

const initialState = {
    dogs:[],
    allDogs:[],
    Temperaments:[],
    detail:[],

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
                Temperaments: action.payload
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

            case CLEANER:
                return {
                    ...state,
                    details: {},
                };
            case CLEAN_DOG:
                return {
                    ...state,
                    loader: true,
                };    
    
        default:
            return state
    }
}

export default rootReducer