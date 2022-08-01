const axios = require('axios')
const { YOUR_API_KEY } = process.env

const getapiinfo = async ()=>{
    const apiurl= await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)
    
    const apiinfo=await apiurl.data.map(e=>{
        return{
            id:e.id,

            name:e.name,

            height_Min:e.height.metric.split("-")[0] && e.height.metric.split("-")[0]!=="NaN"&&isNaN(e.height.metric.split("-")[0])!==true?e.height.metric.split("-")[0]:(e.height.imperial.split("–")[0]&&e.height.imperial.split("-")[0]!=="NaN"&&isNaN(e.height.imperial.split("-")[0])!==true?Math.round(e.height.imperial.split("–")[0]/ 2.205).toString():'No tenemos Altura Maxima '),

            heigh_Max:e.height.metric.split("-")[1] && e.height.metric.split("-")[1]!=="NaN"&&isNaN(e.height.metric.split("-")[1])!==true?e.height.metric.split("-")[1]:(e.height.imperial.split("–")[1]&&e.height.imperial.split("-")[1]!=="NaN"&&isNaN(e.height.imperial.split("-")[1])!==true?Math.round(e.height.imperial.split("–")[1]/ 2.205).toString():'No tenemos Altura Maxima ')
            
            /* Math.round(e.height.imperial.split("–")[1]/ 2.205).toString() */
            
            ,

          
            weight_Min:e.weight.metric.split("-")[0] && e.weight.metric.split("-")[0]!=="NaN"&&isNaN(e.weight.metric.split("-")[0])!==true?e.weight.metric.split("-")[0]:(e.weight.imperial.split("–")[0]&&e.weight.imperial.split("-")[0]!=="NaN"&&isNaN(e.weight.imperial.split("-")[0])!==true?Math.round(e.weight.imperial.split("–")[0]/ 2.205).toString():'No tenemos Peso Minimo ')
            
            ,

            /* Math.round(e.weight.imperial.split("–")[0]/ 2.205).toString() */

            weight_Max:e.weight.metric.split("-")[1] && e.weight.metric.split("-")[1]!=="NaN"&&isNaN(e.weight.metric.split("-")[1])!==true?e.weight.metric.split("-")[1]:(e.weight.imperial.split("–")[1]&&e.weight.imperial.split("-")[1]!=="NaN"&&isNaN(e.weight.imperial.split("-")[0])!==true?Math.round(e.weight.imperial.split("–")[1]/ 2.205).toString():'No tenemos Peso Maximo ')
            
            
            ,
            weight:e.weight,
            height:e.height,

            /* e.weight.metric.split('-')[1] && e.weight.metric.split('-')[1] !== 'NaN' ?
                e.weight.metric.split(' - ')[1] :
                (e.weight.imperial.split('-')[1] && e.weight.imperial.split('-')[1] !== 'NaN' ?
                    Math.round(e.weight.imperial.split('-')[1] / 2.205).toString() :
                    (e.weight.metric.split(' - ')[0] && e.weight.metric.split(' - ')[0] !== 'NaN' ?
                        Math.round(e.weight.metric.split('-')[0] * 1.1).toString() :
                        (e.weight.imperial.split('-')[0] && e.weight.imperial.split('-')[0] !== 'NaN' ?
                            Math.round(e.weight.metric.split('-')[0] * 1.1 / 2.205).toString() :
                            'No tenemos Peso Maximo para ese Perro'))) */

            life_span: e.life_span !== null ? e.life_span : 'Esperanza de vida no encontrada',

            temperaments: e.temperament ? e.temperament : 'Sin datos de temperamentos',

            image: e.image.url,
        }
    })
    // console.log(apiinfo)
    return apiinfo
}

module.exports={getapiinfo}

/* [ ] Los campos mostrados en la ruta principal para cada raza (imagen, nombre y temperamento)
[ ] Altura
[ ] Peso
[ ] Años de vida
[{"weight":{"imperial":"6 - 13","metric":"3 - 6"},
"height":{"imperial":"9 - 11.5","metric":"23 - 29"},
"id":1,
"name":"Affenpinscher",
"bred_for":"Small rodent hunting, lapdog",
"breed_group":"Toy",
"life_span":"10 - 12 years",
"temperament":"Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
"origin":"Germany, France",
"reference_image_id":"BJa4kxc4X",
"image":{"id":"BJa4kxc4X","width":1600,"height":1199,"url":"https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"}} */

/* "id":113,"name":"French Bulldog"
,"bred_for":"Lapdog",
"breed_group":"Non-Sporting",
"life_span":"9 - 11 years",
"temperament":"Playful, Affectionate, Keen, Sociable, Lively, Alert, Easygoing, Patient, Athletic, Bright",
"reference_image_id":"HyWNfxc47",
"image":{"id":"HyWNfxc47","width":740,"height":430,"url":"https://cdn2.thedogapi.com/images/HyWNfxc47.jpg"}},
{"weight":{"imperial":"25 - 45","metric":"11 - 20"},"height":{"imperial":"17 - 20","metric":"43 - 51"} */