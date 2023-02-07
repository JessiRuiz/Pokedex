const axios = require ("axios")

const findPokemon = async (name)=> {
    
const foundPoke = await axios({
    method: 'get',
    url:`https://pokeapi.co/api/v2/pokemon/${name}`,
})
return foundPoke
}

module.exports = {findPokemon}