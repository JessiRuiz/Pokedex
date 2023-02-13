const axios = require ("axios")

const findPokemon = async (name)=> {
    
const foundPoke = await axios({
    method: 'get',
    url:`https://pokeapi.co/api/v2/pokemon/${name}`,
})
return foundPoke.data
}

const getItAll = async ()=> {
    
    const allPokes = await axios({
        method: 'get',
        url:`https://pokeapi.co/api/v2/pokemon?offset=${0}&limit=${40}`,
    })
    return allPokes.data
    }

module.exports = {findPokemon, getItAll}