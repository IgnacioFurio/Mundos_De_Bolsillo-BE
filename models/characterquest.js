'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Characterquest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Characterquest.belongsTo(
        models.Character,
        {
          foreignKey: "character_id",
          as: "character"
        }
      );

      Characterquest.belongsTo(
        models.Quest,
        {
          foreignKey: "quest_id",
          as: "quest"
        }
      );
    }
  }
  Characterquest.init({
    character_id: DataTypes.INTEGER,
    quest_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Characterquest',
  });
  return Characterquest;
};