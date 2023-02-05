const { Pokemon } = require('../db.js');


const addPokemon = async (pokemon) => {
  let poke = pokemon
  
  const newpoke = await Pokemon.create({poke});
   return newpoke
  
  };
  module.exports = addPokemon;