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
        try{
            let json = await axios.get(`http://localhost:3001/types`)
            return dispatch({
                type: "GET_TYPES",
                payload: json.data,
        })
        } catch(e){
            console.log('Hubo un error en la peticion getType: ' + e)
        } 
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
            console.log('Hubo un error en la peticion getById: ' + e)
        }
    }
}

export const filterByType = (payload)=> {
    return async function(dispatch){
        try{
            let json = await axios.get()
        }catch(e) {
            console.log('Hubo un error en la funcion filterByType: ' + e)
        }
    } 
}

export const getByType = (type)=> {
    return async function(dispatch){
        try{
            let json= await axios.get(`http://localhost:3001/pokes/${type}`)
            return dispatch({
                type: "GET_BY_TYPES",
                payload: json.data
            })
        } catch(e){
            console.log("Hubo un error en la funcion getByType: " + e )
        }
    }
}

export const postPokemon = (payload)=> {
    return async function(dispatch){
        const response = await axios.post(`http://localhost:3001/pokemons`, payload);
        return response 
    }
}

export const filterCreate = (payload)=> {
    return {
        type: "FILTER_BY_CREATE",
        payload
    }
}

export const orderByName = (payload)=> {
    return{
        type: "ORDER_BY_NAME",
        payload
    }
}    
    export const orderByForce = (payload)=> {
        return {
            type: "ORDER_BY_FORCE",
            payload
        }
    }
