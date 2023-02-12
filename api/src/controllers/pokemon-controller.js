const { Pokemon } = require('../db.js');
const {findPokemon, getItAll} = require('../services/pokeapi')


const getPokemon = async (id) => {
  try{let poke = await findPokemon(id)
    if(poke){
      const life = poke.stats.find(({stat})=> stat.name === "hp").base_stat
      const attack = poke.stats.find(({stat})=> stat.name === "attack").base_stat
      const defense = poke.stats.find(({stat})=> stat.name === "defense").base_stat
      const speed = poke.stats.find(({stat})=> stat.name === "speed").base_stat
      const type1 = poke.types[0].type.name
      const type2 = poke.types[1].type.name
      const imagen = poke.sprites.other["official-artwork"].front_default
      const {id, name, height, weight} = poke
      return {id, name, imagen, height, weight,type1, type2, life, attack, defense, speed}
    }
  }catch(error){
    console.log(error, "error")
   throw new Error ("please introduce a valid id")
  }
}
const getAllPokemon = async (query) => {
  try{let pokemons = await getItAll(query)

    const mapResults = pokemons.results.map(async({name})=> {
      const wholePoke = await findPokemon(name)
      const type1 = wholePoke.types[0].type.name
      const type2 = wholePoke.types[1]?.type.name || null
      const imagen = wholePoke.sprites.other["official-artwork"].front_default
      const {id} = wholePoke
      return {id, name, imagen, type1, type2};
    })
    pokemons.nextOffset =query.offset*1 + query.limit*1;
    pokemons.results = await Promise.all (mapResults);
      return pokemons
    
  }catch(error){
    console.log(error, "error")
   throw error
  }
}
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
  module.exports = {addPokemon, getPokemon, getAllPokemon};