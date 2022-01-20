
const initialState = {
    pokemon: []

}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case "GET_POKEMONS":
            return{
                ...state,
                pokemon: action.payload 
            }
        default:
            return state 
    }
}