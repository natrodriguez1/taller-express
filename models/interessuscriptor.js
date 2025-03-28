'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class interessuscriptor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  interessuscriptor.init({
    int_id: DataTypes.INTEGER,
    sus_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'interessuscriptor',
    tableName: 'interessucriptores'
  });
  return interessuscriptor;
};