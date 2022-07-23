const {Dog , Temperament}=require('../db')

const getdbinfo = async ()=>{
    return await Dog.findAll({
        include:{
            model:Temperament,
            attibutes:['name'],
            throught:{
                attibutes:[]
            }
        }
    })

}
module.exports = {getdbinfo}