const { Router } = require('express');
const dogs = require('../rutas/dogs')

const express = require('express')


//  const { getAll }=require('../info/getAllDogs')
const { getapiinfo }= require('../info/getapiinfo')


require('dotenv').config();
// Importar todos los routers;  
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(express.json())

router.use('/dogs',dogs)


// const axios = require('axios')
// const {Dog , temperament}=require('../db')
// const { YOUR_API_KEY } = process.env

// router.get('/dogs',async(req, res,next) => {
//     try {
//         let listDogs=getapiinfo();
//         console.log(listDogs)
//         res.json(listDogs)
//     } catch (e) {
//         next(e);
//     }
// })


// router.get('/dogs',async (req, res) => {
//     try {
//         let listDogs=getAll();
//         res.status(200).send(listDogs)
//     } catch (e) {
        
//     }
// });


module.exports = router;
