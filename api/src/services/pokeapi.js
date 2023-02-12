const axios = require ("axios")

const findPokemon = async (name)=> {
    
const foundPoke = await axios({
    method: 'get',
    url:`https://pokeapi.co/api/v2/pokemon/${name}`,
})
return foundPoke.data
}

const getItAll = async ({offset, limit})=> {
    console.log(offset, limit);
    const allPokes = await axios({
        method: 'get',
        url:`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
    })
    return allPokes.data
    }

module.exports = {findPokemon, getItAll}