export const CREATE_POKEMON = 'CREATE_POKEMON';
export const CREATE_POKEMON_ERROR = 'CREATE_POKEMON_ERROR';
export const GET_POKEMON = 'GET_POKEMON';
export const GET_POKEMON_ERROR = 'GET_POKEMON_ERROR';
export const GET_ALL_POKEMON = 'GET_ALL_POKEMON';
export const GET_BY_NAME = 'GET_BY_NAME';
export const GET_BY_NAME_ERROR ='GET_BY_NAME_ERROR';
export const GET_ALL_TYPES = 'GET_ALL_TYPES';

export const addPokemon = (poke) => {
    return function(dispatch){
        fetch('http://localhost:3001/pokemons',{
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body:JSON.stringify(poke)})
        .then(res => res.json())
        .then((data) => {
            if(data.error){
                dispatch({
                    type: CREATE_POKEMON_ERROR,
                    payload: data.error
                })
            }else{
            dispatch({
            type: CREATE_POKEMON,
            payload: data
        })}})
    }
};

export const getPokemon = (id) => {
    return function(dispatch){
        fetch(`http://localhost:3001/pokemons/${id}`,{
                method: 'GET',
                headers: {"Content-Type": "application/json"},
                })
        .then(res => res.json())
        .then((data) => {
            if(data.error){
                dispatch({
                    type: GET_POKEMON_ERROR,
                    payload: data.error
                })
            }else{
            dispatch({
            type: GET_POKEMON,
            payload: data
        })}})
    }
};

export const getByName = (name) => {
    return function(dispatch){
        fetch(`http://localhost:3001/pokemons?name=${name}`,{
                method: 'GET',
                headers: {"Content-Type": "application/json"},
                })
        .then(res => res.json())
        .then((data) => {
            if(data.error){
                dispatch({
                    type: GET_BY_NAME_ERROR,
                    payload: data.error
                })
            }else{
            dispatch({
            type: GET_BY_NAME,
            payload: data
        })}})
    }
};

export const getAllPokemon = ({limit=12, offset=0, type="", sort="id", order="ascending"}) => {
    return function(dispatch){
        fetch(`http://localhost:3001/pokemons?offset=${offset}&limit=${limit}&type=${type}&sort=${sort}&order=${order}`,{
                method: 'GET',
                headers: {"Content-Type": "application/json"},
                })
        .then(res => res.json())
        .then(data => dispatch({
            type: GET_ALL_POKEMON,
            payload: data
        }))
    }

};

export const getAllTypes = () => {
    return function(dispatch){
        fetch(`http://localhost:3001/types`,{
                method: 'GET',
                headers: {"Content-Type": "application/json"},
                })
        .then(res => res.json())
        .then(data => dispatch({
            type: GET_ALL_TYPES,
            payload: data
        }))
    }

};