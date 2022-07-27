import axios from 'axios'

export const GETDOGS = 'GETDOGS'
export const SEARCH_FAIL = 'SEARCH_FAIL'


export function  getDogs(name){
    return async function(dispatch){
        try {
            if(name){
                return axios.get('http://localhost:3001/dogs?name=' + name)
                .then(Element=> dispatch({type:GETDOGS,payload: Element.data}))
                .catch(Element=> dispatch({type:GETDOGS,payload: Element.data}))
            }
            let json = await axios.get('http://localhost:3001/dogs')
            return dispatch({
                type: GETDOGS,
                payload: json.data
            })

        } catch (e) {
        //     var fail = axios.get('http://localhost:3001/dogs?name=' + name)
        //     .then(res => res.data)
        // return dispatch({
        //     type: SEARCH_FAIL,
        //     payload: fail,
        // })
            var fail = axios.get('http://localhost:3001/dogs?name=' + name)
            .then(res => res.data)
        return dispatch({
            type: SEARCH_FAIL,
            payload: fail,
        })
        }
    }
}