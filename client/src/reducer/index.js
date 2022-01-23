
const initialState = {
    pokemon: [],
    type: [],
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case "GET_POKEMONS":
            return{
                ...state,
                pokemon: action.payload 
            }
        case "GET_TYPES": 
        return{
            ...state,
            type: action.payload
        }
        case "ORDER_BY_ID": 
        return{

        } 
        case "GET_BY_NAME":
            return{
                ...state,
                type: action.payload
            }
        case "GET_BY_ID":
            return{
                ...state.pokemon,
                type: action.payload
            }   
        default:
            return state 
    }
}