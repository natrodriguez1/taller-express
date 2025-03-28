'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class suscriptor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  suscriptor.init({
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    fecha_registro: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'suscriptor',
    tableName: 'suscriptores'
  });
  return suscriptor;
};