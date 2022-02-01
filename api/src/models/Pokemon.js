const { DataTypes, INTEGER } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, 
      allowNull: false, 
      primaryKey: true, 

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life: {
      allowNull: true,
      type: DataTypes.INTEGER, 
    },
    force:{
      allowNull: true, 
      type: DataTypes.INTEGER, 
    },
    defense:{
      allowNull: true, 
      type: DataTypes.INTEGER, 
    },
    speed: {
      allowNull: true, 
      type: DataTypes.INTEGER, 
    },   
    weight: {
      allowNull: true,
      type: DataTypes.INTEGER,  
    },
     height: {
      allowNull: true, 
      type: DataTypes.INTEGER, 
    },
    img:{
      allowNull: true,
      type: DataTypes.STRING
    },
    createdByDb:{
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue: true, 
    }
    
  });
};
