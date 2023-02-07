const { Pokemon } = require('../db.js');
const {findPokemon} = require('../services/pokeapi')


const addPokemon = async (pokemon) => {
  let poke = pokemon
  try{
    let existing = await findPokemon (pokemon.name)
    if (existing) {
      console.log("existing", existing);
      throw new Error ("The pokemon name is on use")
    }
  }catch(error){
   if(error?.response?.status === 404){
    const newpoke = await Pokemon.create(poke);
    return newpoke
   }
    else{
      throw error
    }
  }
  
};
  module.exports = addPokemon;