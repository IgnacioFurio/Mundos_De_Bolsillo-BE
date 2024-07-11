'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Character.belongsTo(
        models.World,
        {
          foreignKey: "world_id"
        }
      );

      Character.belongsTo(
        models.Location,
        {
          foreignKey: "from_location_id",
          as: "fromLocation"
        }
      );
      
      Character.belongsTo(
        models.Location,
        {
          foreignKey: "last_location_known_id",
          as: "lastLocationKnown"
        }
      );

      Character.hasMany(
        models.CharacterScene,
        {
          foreignKey: "character_id"
        }
      );

      Character.hasMany(
        models.Knowledge,
        {
          foreignKey: "about_character_id",
          as: "aboutCharacter"
        }
      );
      
      Character.hasMany(
        models.Knowledge,
        {
          foreignKey: "heard_from_character_id"
        }
      );
    }
  }
  Character.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    world_id: DataTypes.INTEGER,
    from_location_id: DataTypes.INTEGER,
    last_location_known_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Character',
  });
  return Character;
};