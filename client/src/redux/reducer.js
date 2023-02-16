import { CREATE_POKEMON, CREATE_POKEMON_ERROR, 
         GET_POKEMON, GET_POKEMON_ERROR, 
         GET_ALL_POKEMON, GET_BY_NAME, GET_BY_NAME_ERROR, GET_ALL_TYPES} from "./actions";

export const initialState = {
    pokemons: [],
    pokemonDetails: {},
    pokedex: {results:[]},
    error: '',
    newPokemon: "",
    types: []
};

const rootReducer = (state = initialState, action) => {
    switch (
       action.type
       ){
        case CREATE_POKEMON:
            return{
                ...state,
                newPokemon:  action.payload.id,
                error: null
            }
        case CREATE_POKEMON_ERROR:
            return{
                ...state,
                error: action.payload
            }
        case GET_POKEMON:
            return{
                ...state,
                pokemonDetails: action.payload,
                error: null
            }
        case GET_POKEMON_ERROR:
            return{
                ...state,
                error: action.payload
            }   
        case GET_BY_NAME:
            return{
                ...state,
                pokedex:{results:[action.payload]}, 
                error: null
            }
        case GET_BY_NAME_ERROR:
            return{
                ...state,
                error: action.payload
            }
        case GET_ALL_POKEMON:
            return{
                ...state,
                pokedex: action.payload
            } 
        case GET_ALL_TYPES:
            return{
                ...state,
                types: action.payload
            }           
        default:
            return {...state}
       } 
};
export default rootReducer;
