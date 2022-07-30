const { Router } = require('express');
const router = Router()

const express = require('express')

const { Dog,Temperament}=require('../db')

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
router.delete("/:id", async function (req, res) {
    const { id } = req.params;
    try {
      if (id) {
        await Dog.destroy({
          where: { id: id },
        });
        res.send({ msg: "Dog deleted" });
      }
    } catch (error) {
      console.log(error);
    }
  });

router.get('*',async(req, res,next) => {
    try {
        let listDogs=await getAllDogs();
        const name = req.query.name
        if(name){
            let dog = await listDogs.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
            dog.length ?
                res.status(200).send(dog) :
                res.send([{
                    name: `la raza ${name} no esta en la base de datos.`, id: ' ', temperaments: 'Puede crearla en nuestro "Creador de Perros"', image: 'https://e7.pngegg.com/pngimages/741/723/png-clipart-adult-white-and-brown-jack-russell-terrier-using-magnifying-glass-search-and-rescue-dog-puppy-dog-training-pet-pets-animals-dog-like-mammal.png'
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
        height_Min,
        height_Max,
        weight_Min,
        weight_Max,
        life_span,
        image,
        temperaments,
        //origins,
        //bredFor,
        //breedGroups,

    } = req.body
    
    try {
       // let height=`${heightMin}-${heightMax}`
    // let weight=`${weightMin}-${weightMax}`
    let DogCreated = await Dog.create({
        name,
        height_Min,
        height_Max,
        weight_Min,
        weight_Max,
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