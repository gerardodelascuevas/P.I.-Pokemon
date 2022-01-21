const { Router } = require('express')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Pokemon, Type } = require('../db.js')
const axios = require('axios')

const router = Router()

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//solicitando los datos a la API 
const getApiInformation = async()=> { //getApiInformation retorna los datos de los Pokemon
   console.time('pokes')
//     let getInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon`)    
//    const howManyPokes = getInfo.data.count   
    let id = 1
    let pokeInfo = []   
    
    while(id <= 40){    
            pokeInfo.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`))   
            id++
    }
            let getInfoById = await Promise.all(pokeInfo)
            .then(pokemon=> {
                let apiPokes = pokemon.map(x=> {
                    return {
                        id: x.data.id,
                        name: x.data.name,
                        life: x.data.stats[0].base_stat,
                        force: x.data.stats[1].base_stat,
                        defense: x.data.stats[2].base_stat,
                        speed: x.data.stats[5].base_stat,
                        weight: x.data.weight,
                        height: x.data.height,
                        img: x.data.sprites.other.dream_world.front_default
                    }
                })
                return apiPokes
            })            
      
        console.timeEnd('pokes')           
       
        return getInfoById
    } 

const getDbInformation = async()=> {
    return await Pokemon.findAll({
        include:{
            model: Type,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })
}
//console.log('esto trae mi db' + getDbInformation())

const getAllInformation = async()=> {
    const apiInfo = await getApiInformation()
    console.log('apiInfo: ' + apiInfo)
    const dbInfo = await getDbInformation()
    console.log('dbInfo: ' + dbInfo)
    const allInfo = apiInfo.concat(dbInfo)
    return allInfo
}

router.get('/pokemons', async (req, res) => {  
    const { name } = req.query 
    const allPoke = await getAllInformation()
        if(name){
            console.log(name)
            const pokename = allPoke.filter(x => x.name.toLowerCase().includes(name.toLocaleLowerCase())) 
            pokename.length ? 
            res.send(pokename) : res.sendStatus(404).send("Sorry, your pokemon isn't available")
        } else {
            res.send(allPoke)
        }
})

router.get(`/pokemons/:id`, async (req, res)=> {  
    let  { id }  = req.params
    let pokemons = await getAllInformation()    
    if(id){
        const pokeHasBeenFound =  pokemons.find(x => x.id == id)        
        pokeHasBeenFound ? 
        res.send(pokeHasBeenFound) : res.status(404).send("Sorry, your pokemon isn't in our database")
    } else res.send(pokemons)
})

router.post(`/pokemons`, async (req, res)=> {
    const { id, name, life, force, defense, speed, weight, height } = req.body

    Pokemon.findOrCreate({
        where: {
            id: id,
            name: name,
            life: life,
            force: force,
            defense: defense,
            speed: speed, 
            weight: weight,
            height: height, 
        }        
    })
    res.send("Your pokemon has been created correctly")
})

router.get('/types', async (req, res)=> {
    let pokemonTypes = await axios.get(`https://pokeapi.co/api/v2/type`)
    let pokeTypesArray =  await pokemonTypes.data.results.map(x=> x.name )           

    pokeTypesArray.find(x=> {
        Type.findOrCreate({
            where: {                             
            name: x,           
            }           
        })
    }) 
    const allPokeTypes = await Type.findAll()  
    res.send(allPokeTypes)
})


module.exports = router;
