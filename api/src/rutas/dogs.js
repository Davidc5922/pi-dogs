const { Router } = require('express');
const router = Router()

const express = require('express')

const { Dog}=require('../db')

const { getAllDogs }=require('../info/getAllDogs')
const { getdbinfo }=require('../info/getdbinfo')


// const axios = require('axios')
// const {Dog , temperament}=require('../db')
// const { YOUR_API_KEY } = process.env

router.get('/:raceId',async(req, res,next) => {
    const { raceId } = req.params;
    console.log(raceId)
    const listDogs=await getAllDogs();
    if (raceId) {
        let race = await listDogs.filter(e =>e.id==raceId);
   
            res.status(200).json(race) 
           
    } 
})
router.delete('/:Id',async(req, res,next) => {
    const { Id } = req.params;
    console.log(Id)
    try {
        if (Id) {
          await Dog.destroy({
            where: { id: Id },
          });
          res.send({ msg: "perro eliminado" });
        }
      } catch (e) {
        console.log(e);
      }
})

router.get('*',async(req, res,next) => {
    try {
        let listDogs=await getAllDogs();
        const name = req.query.name
        if(name){
            let dog = await listDogs.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
            dog.length ?
                res.status(200).send(dog) :
                res.send([{
                    name: `la raza ${name} no esta en la base de datos.`, id: '', temperaments: 'Puede crearla en nuestro "Creador de Perros"', image: 'https://e7.pngegg.com/pngimages/741/723/png-clipart-adult-white-and-brown-jack-russell-terrier-using-magnifying-glass-search-and-rescue-dog-puppy-dog-training-pet-pets-animals-dog-like-mammal.png'
                }]);
        }else{
        res.status(200).send(listDogs)}
    } catch (e) {
        next(e);
    }
})

router.post('*', async (req, res,next) => {
    let {
        name,
        heightMin,
        heightMax,
        weightMin,
        weightMax,
        life_span,
        image,
        temperaments,
        //origins,
        //bredFor,
        //breedGroups,

    } = req.body
    let height = heightMin+"-"+heightMax
    let weight = weightMin+"-"+weightMax
    try {
       // let height=`${heightMin}-${heightMax}`
    // let weight=`${weightMin}-${weightMax}`
    let DogCreated = await Dog.create({
        name,
        heightMin,
        heightMax,
        height,
        weight,
        life_span,
        image,
        temperaments,
    })
    let temperamentDB = await Temperament.findAll({
        where: {
            name: temperaments
        }
    })
    DogCreated.addTemperament(temperamentDB)
    res.status(200).send("perro creado") 
    } catch (e) {
        next(e);
    }
})

module.exports = router