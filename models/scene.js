'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Scene extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Scene.hasMany(
        models.CharacterScene,
        {
          foreignKey: "scene_id"
        }
      );
     
      Scene.belongsTo(
        models.Game,
        {
          foreignKey: "game_id"
        }
      );

    }
  }
  Scene.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    game_id: DataTypes.INTEGER,
    location_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Scene',
  });
  return Scene;
};