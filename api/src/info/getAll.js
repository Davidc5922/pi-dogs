const {getapiinfo} = require('./getapiinfo')
const {getdbinfo} = require('./getdbinfo')

const getAll = async()=>{
    const apiinfo = await getapiinfo()
    const dbinfo = await getdbinfo()
    const totalinfo = apiinfo.concat(dbinfo).sort((a,b)=>{
        return a.name < b.name ? -1 : 1
    })
}
module.exports={getAll}