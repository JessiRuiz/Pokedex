export const CREATE_POKEMON = 'CREATE_POKEMON';
export const GET_POKEMON = 'GET_POKEMON'

export const addPokemon = (poke) => {
    return function(dispatch){
        fetch('http://localhost:3001/pokemons',{
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body:JSON.stringify(poke)})
        .then(res => res.json())
        .then(data => dispatch({
            type: CREATE_POKEMON,
            payload: data
        }))
    }
};

export const getPokemon = (id) => {
    return function(dispatch){
        fetch(`http://localhost:3001/pokemons/${id}`,{
                method: 'GET',
                headers: {"Content-Type": "application/json"},
                })
        .then(res => res.json())
        .then(data => dispatch({
            type: GET_POKEMON,
            payload: data
        }))
    }

};