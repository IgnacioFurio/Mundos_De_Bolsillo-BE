'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CharacterScene extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CharacterScene.belongsTo(
        models.Scene,
        {
          foreignKey: "scene_id"
        }
      );
      
      CharacterScene.belongsTo(
        models.Character,
        {
          foreignKey: "character_id"
        }
      );
    }
  }
  CharacterScene.init({
    scene_id: DataTypes.INTEGER,
    character_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CharacterScene',
  });
  return CharacterScene;
};