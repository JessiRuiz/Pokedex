const {addPokemon, getPokemon, getAllPokemon, getByName, getAllTypes} = require('../controllers/pokemon-controller');
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter)
router.get('/types', async (req, res) =>{
try {
    const resp = await getAllTypes()
    res.status(201).json(resp)
  }catch(error){
    res.status(400).json({error : error.message})
   }
});

router.get('/pokemons/:id', async (req, res) =>{
  const pokeid = req.params.id
  try {
    const resp = await getPokemon(pokeid)
    console.log(resp, "resp")
    res.status(201).json(resp)
  }catch(error){
    res.status(400).json({error : error.message})
   }
});

router.get('/pokemons', async (req, res) =>{
  const query = req.query
  try {
    const resp = await (query.name? getByName(query.name) : getAllPokemon(query))
    res.status(201).json(resp)
  }catch(error){
    res.status(400).json({error : error.message})
   }
});

router.post('/pokemons', async (req, res) => {
    const pokemon = req.body
    try{
      const respu = await addPokemon(pokemon)
      res.status(201).json(respu)
    } catch(error){
      console.error(error)
      res.status(400).json({error : error.message})
    }
  })

module.exports = router;
