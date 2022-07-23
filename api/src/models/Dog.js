const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id:{
    type: DataTypes.UUID,
    defaultvalue:DataTypes.UUIDV4,
    allowNull:false,
    primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    altura:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    Peso:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    Años_de_vida:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdInOB:{
      type:DataTypes.BOOLEAN,
      defaultvalue:true,
      allowNull:false
    }
  },
  {timestamps: false});
};
/* ID *
Nombre *
Altura *
Peso *
Años de vida */