
const initialState = {
    pokemon: [],
    type: [],
    allPokes: []
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case "GET_POKEMONS":
            return{
                ...state,
                pokemon: action.payload, 
                allPokes: action.payload,
            }
        case "GET_TYPES": 
        return{
            ...state,
            type: action.payload
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
        case "GET_BY_TYPES":
            return{
                ...state.pokemon,
                type: action.payload
            }  
        case "POST_POKEMON":    
            return{
                ...state,
            }
        case "FILTER_BY_CREATE":
                const allPokes = state.allPokes
                const pokes = state.pokemon 
                let filterbycreate
                if(action.payload === "Created") filterbycreate = state.allPokes
               else {
                   filterbycreate = action.payload === "Created by you" ? state.pokemon.filter(x=> x.createdByDb === true) 
                    : state.pokemon.filter(x=> x.createdByDb !== true) 
               }              
                //console.log(state.pokemon)
                
                return {
                    ...state,
                    pokemon: filterbycreate
                } 
        case "ORDER_BY_NAME":
            let sortName = action.payload === "up" ?            
            state.pokemon.sort((a,b)=> {
                if(a.name > b.name) return -1
                else return 0 
            }) :
            state.pokemon.sort((a,b)=> {
                if(a.name<b.name) return -1
                else return 0 
            })          
            return {
                ...state,
                pokemon: sortName,
            }
            case "ORDER_BY_FORCE":
                let sortForce = action.payload === "up" ?                
                state.pokemon.sort((a,b)=> {
                    if(a.force>b.force) return -1
                    else return 0
                }) : 
                state.pokemon.sort((a,b)=> {
                    if(a.force < b.force) return -1
                    else return 0 
                })
                return {
                    ...state, 
                    pokemon: sortForce
                }


        default:
            return state 
    }
}