const { Router } = require('express');
const router = Router()

const express = require('express')

const {Temperament }=require('../db')

const { getAllDogs }=require('../info/getAllDogs')
const { getdbinfo }=require('../info/getdbinfo')

const axios = require('axios')

const { YOUR_API_KEY } = process.env

router.get('*',async(req, res,next) => {
    const infoApi= await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)
    try {
        let listTemper = infoApi.data.map(e=>e.temperament ? e.temperament:"no temperament").join(',').split(',')
        let Alltemperament = listTemper.filter(e=>e!=="no temperament")
        let eTemper = [... new Set(Alltemperament)]
        eTemper.forEach(temper =>{
            Temperament.findOrCreate({
                where:{name: temper}
            })
        })
        
        let listAlltemper = await Temperament.findAll()
        res.status(200).send(listAlltemper)
    } catch (e) {
        next(e);
    }
})

module.exports = router