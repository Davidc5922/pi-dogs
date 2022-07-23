const { Router } = require('express');
const router = Router()

const express = require('express')

const { getAllDogs }=require('../info/getAllDogs')


// const axios = require('axios')
// const {Dog , temperament}=require('../db')
// const { YOUR_API_KEY } = process.env

router.get('*',async(req, res,next) => {
    try {
        let listDogs=await getAllDogs();
        const name = req.query.name
        if(name){
            let dog = await listDogs.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
            dog.length ?
                res.status(200).send(dog) :
                res.send([{
                    name: 'la raza no esta en la base de datos.', id: '', temperaments: 'Puede crearla en nuestro "Creador de Perros"', image: 'https://e7.pngegg.com/pngimages/741/723/png-clipart-adult-white-and-brown-jack-russell-terrier-using-magnifying-glass-search-and-rescue-dog-puppy-dog-training-pet-pets-animals-dog-like-mammal.png'
                }]);
        }else{
        res.status(200).send(listDogs)}
    } catch (e) {
        next(e);
    }
})

router.get('/:id',async(req, res,) => {
    const { raceId } = req.params;
    const allRaces = await getAllDogs();
    if (raceId) {
        let race = await allRaces.map(e => e.id == raceId);
        race.length ?
            res.status(200).json(race) :
            res.status(404).json(`Perdon, el ID '${raceId}' No aparece`)
    }     
       
})

module.exports = router