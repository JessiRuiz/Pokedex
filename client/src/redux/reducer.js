import { CREATE_POKEMON, GET_POKEMON, GET_ALL_POKEMON, GET_BY_NAME, GET_BY_NAME_ERROR } from "./actions";

export const initialState = {
    pokemons: [],
    pokemonDetails: {},
    pokedex: {results:[]},
};

const rootReducer = (state = initialState, action) => {
    switch (
       action.type
       ){
        case CREATE_POKEMON:
            return{
                ...state,
                pokemonDetails: [...state.pokemons, action.payload]
            }
        case GET_POKEMON:
            return{
                ...state,
                pokemonDetails: action.payload
            }
        case GET_BY_NAME:
            return{
                ...state,
                pokedex:{results:[action.payload]} 
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
        default:
            return {...state}
       }
};
export default rootReducer;
