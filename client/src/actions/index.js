import axios from 'axios'

export const getPokemons = ()=> {
     return async function (dispatch){
         let json = await axios.get(`http://localhost:3001/pokemons`)
         return dispatch({
             type: "GET_POKEMONS",
             payload: json.data,
         })
     }
}

export const getType = ()=> {
    return async function (dispatch){
        let json = await axios.get(`http://localhost:3001/types`)
        return dispatch({
            type: "GET_TYPES",
            payload: json.data,
        })
    }
}
export const getByName = (name)=> {
    return async function(dispatch){
        try{
             let json = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
             return dispatch({
            type: "GET_BY_NAME",
            payload: json.data,           
        })
        } catch(e) {
            console.log('Hubo un error en la peticion getByName: ' + e)
        }        
    }
}

export const getByID = (id)=> {
    return async function(dispatch){
        try{
            let json= await axios.get(`http://localhost:3001/pokemons/${id}`)
            return dispatch({
                type: "GET_BY_ID",
                payload: json.data,
            })
        } catch(e) {
            console.log('Hubo un error en la peticion getById' + e)
        }
    }
}

export const filterByType = (payload)=> {
    return async function(dispatch){
        try{
            let json = await axios.get()
        }
    }
}

export const orderById = ()=> {

}