import axios from 'axios'

export const GETDOGS = 'GETDOGS'
export const GETTEMPERAMENTS = 'GETTEMPERAMENTS'
export const GETDETAIL = 'GETDETAIL'
export const SEARCHFAIL = 'SEARCHFAIL'
export const DELETEDDOG = 'DELETEDDOG'
export const SEARCH_FAIL = 'SEARCH_FAIL'
export const CLEAN_DOG = 'CLEAN_DOG'
export const CLEANER = 'CLEANER'


//export const GET_COUNTRY= 'GET_COUNTRY'
//export const FILTER_BY_COUNTRY = 'FILTER_BY_COUNTRY'

export function getDogs(name) {
    return async function (dispatch) {
        try {
            if (name) {
                return await axios.get('http://localhost:3001/dogs?name=' + name)
                    .then(res => dispatch({ type: GETDOGS, payload: res.data }))
                /*     .catch(err => dispatch({ type: GETDOGS, payload: err.data })) */
            }
                let json = await axios.get('http://localhost:3001/dogs', {})
            return dispatch({
                type: GETDOGS,
                payload: json.data
            })
            
            
        } catch (err) {
            var fail = axios.get('http://localhost:3001/dogs?name=' + name)
                .then(res => res.data)
            return dispatch({
                type: SEARCHFAIL,
                payload: fail,
            })
        }

    }
}

export function getTemperaments() {
    return async function (dispatch) {
        let json = await axios.get('http://localhost:3001/temperament', {})
        return dispatch({
            type: GETTEMPERAMENTS,
            payload: json.data
        })
    }
}

export function getDetail(id) {
    return async function (dispatch) {
        try {
            var json = await axios.get('http://localhost:3001/dogs/' + id)
            return dispatch({
                type: GETDETAIL,
                payload: json.data
            })
        } catch (err) {
            console.log(err)

        }
    }
}


export function postDogs(payload) {
    return async function (dispatch) {
        const response = await axios.post('http://localhost:3001/dogs', payload)
        console.log(response)
        return response
    }

}


export function deleteDog(id) {
    return async function (dispatch) {
        try {
            const deleteDog = await axios.delete(`http://localhost:3001/${id}`);
            return dispatch({
                type: DELETEDDOG,
                payload: deleteDog,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export function cleanDog() {
    return {
        type: CLEAN_DOG,
        payload: {},
    };
}

export function cleaner() {
    return {
        type: CLEANER,
        payload: {},
    };
}

