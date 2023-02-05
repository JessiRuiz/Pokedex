const addPokemon = require('../controllers/pokemon-controller')
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter)
router.get('/', (req, res)=>{
    try{
        res.status(201).json({msg: "hola mundo"})
    }catch(error){
        res.status(400).json({err : error.message})
      }
} )

router.post('/pokemons', async (req, res) => {
    const {name} = req.body
    console.log(req.body);
    try{
      const respu = await addPokemon(name)
      res.status(201).json({msg : respu})
    } catch(error){
      res.status(400).json({err : error.message})
    }
  })

module.exports = router;
