'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class World extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      World.hasMany(
        models.WorldGate,
        {
          foreignKey: "world_id"
        }
      );
      
      World.hasMany(
        models.Location,
        {
          foreignKey: "world_id"
        }
      );      
      
      World.hasMany(
        models.Character,
        {
          foreignKey: "world_id"
        }
      );      
    }
  }
  World.init({
    name: DataTypes.STRING(),
    description: DataTypes.TEXT()
  }, {
    sequelize,
    modelName: 'World',
  });
  return World;
};