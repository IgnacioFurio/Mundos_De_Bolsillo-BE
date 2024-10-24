'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Game.hasMany(
        models.WorldGate,
        {
          foreignKey: "game_id"
        }
      );
      
      Game.hasMany(
        models.Scene,
        {
          foreignKey: "game_id"
        }
      );
    }
  }
  Game.init({
    title: DataTypes.STRING(),
    description: DataTypes.TEXT()
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};