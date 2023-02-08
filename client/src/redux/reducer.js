import { CREATE_POKEMON } from "./actions";

const initialState = {
    pokemons: [],
    pokemponDetails: {},
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
            default:
       }
};
export default rootReducer;
