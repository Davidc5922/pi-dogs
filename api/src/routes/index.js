const { Router } = require('express');
const { Dog, Temperament }=require('../db')
const cors = require('cors')



const express = require('express')


const { getAllDogs }=require('../info/getAllDogs')
// const { getapiinfo }= require('../info/getapiinfo')


require('dotenv').config();
// Importar todos los routers;  
// Ejemplo: const authRouter = require('./auth.js');
const dogs = require('../rutas/dogs')
const temperaments = require('../rutas/temperaments')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(express.json())
router.use(cors())
router.use('/dogs',dogs)
router.use('/temperaments',temperaments)




// router.post('/dogs', async (req, res) => {
//     let {
//         name,
//         heightMin,
//         heightMax,
//         weightMin,
//         weightMax,
//         life_span,
//         image,
//         temperaments,

//     } = req.body
//     let height=`${heightMin}-${heightMax}`
//     let weight=`${weightMin}-${weightMax}`
//     let DogCreated = await Dog.create({
//         name,
//         height,
//         weight,
//         life_span: life_span + ' años',
//         image,

//     })
//     let temperamentDB = await Temperament.findAll({
//         where: {
//             name: temperaments
//         }
//     })


//     DogCreated.addTemperament(temperamentDB)
//     res.status(200).send('Raza creada')

// })


module.exports = router;
