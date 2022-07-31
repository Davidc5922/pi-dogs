import {GETDOGS,GETTEMPERAMENTS,GETDETAIL,DELETEDDOG,SEARCH_FAIL, CLEAN_DOG,CLEANER,Filter_Temper,FILTER_ORIGIN,SORT_BY_NAME,SORT_BY_WEIGHT} from '../actions'
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



            case Filter_Temper:
                const allDogs = state.allDogs
                const temperamentFiltered = action.payload === 'all' ? allDogs : allDogs.filter(e => {
                    if (typeof (e.temperaments) === 'string') return e.temperaments.includes(action.payload)
                    if (Array.isArray(e.temperaments)) {
                        let temps = e.temperaments.map(e => e.name)
                        return temps.includes(action.payload)
                    }
                    return true
                })
                return {
                    ...state,
                    dogs: temperamentFiltered
                };



                case FILTER_ORIGIN:
                    let all = state.allDogs
                    const originFiltered = action.payload === 'all' ? all : action.payload === 'created' ? all.filter(e => e.CreatedInDB) : all.filter(e => !e.CreatedInDB)
                    return {
                        ...state,
                        dogs: originFiltered
                    };



                
        case SORT_BY_NAME:
            const sortedName = action.payload === 'ABC' ?
                state.dogs.sort(function (a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return 1;
                    }
                    if (b.name.toLowerCase() > a.name.toLowerCase()) {
                        return -1;
                    }
                    return 0
                }) :
                state.dogs.sort(function (a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return -1;
                    }
                    if (b.name.toLowerCase() > a.name.toLowerCase()) {
                        return 1;
                    }
                    return 0
                })
            return {
                ...state,
                dogs: sortedName
            }
        case SORT_BY_WEIGHT:
            const sortWeight = action.payload === 'menor' ?
                state.dogs.sort(function (a, b) {
                    if (a.weight_Min > b.weight_Min) {
                        return 1;
                    }
                    if (b.weight_Min > a.weight_Min) {
                        return -1;
                    }
                    return 0
                }) :
                state.dogs.sort(function (a, b) {
                    if (a.weight_Max > b.weight_Max) {
                        return -1;
                    }
                    if (b.weight_Max > a.weight_Max) {
                        return 1;
                    }
                    return 0
                })
            return {
                ...state,
                dogs: sortWeight
            }



          

        default:
            return state
    }
}

export default rootReducer