const {getapiinfo} = require('./getapiinfo')
const {getdbinfo} = require('./getdbinfo')

const getAllDogs = async () => {
    const apiInfo = await getapiinfo()
    const dbInfo = await getdbinfo()
    const totalInfo = apiInfo.concat(dbInfo).sort( (a,b) =>{
        return a.name < b.name ? -1 : 1
    })
    return totalInfo
}

module.exports={getAllDogs}