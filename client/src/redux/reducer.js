import { CREATE_POKEMON, GET_POKEMON } from "./actions";

export const initialState = {
    pokemons: [],
    pokemonDetails: {},
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
        default:
            return {...state}
       }
};
export default rootReducer;
