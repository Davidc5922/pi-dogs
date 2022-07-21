const {Dog , temperament}=require('../db')

const getdbinfo = async ()=>{
    return await Dog.findAll({
        include:{
            model:temperament,
            attibutes:['name'],
            throught:{
                attibutes:[]
            }
        }
    })

}
module.exports = {getdbinfo}