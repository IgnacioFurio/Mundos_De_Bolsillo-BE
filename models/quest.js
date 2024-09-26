'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Quest.belongsTo(
        models.Character,
        {
          foreignKey: "delievered_by_character_id",
          as: "delieveredByCharacter"
        }
      );
      
      Quest.belongsTo(
        models.Location,
        {
          foreignKey: "got_in_location_id",
          as: "gotInLocation"
        }
      );
      
      Quest.belongsTo(
        models.Location,
        {
          foreignKey: "happens_in_location_id",
          as: "happensInLocation"
        }
      );

      Quest.hasMany(
        models.Characterquest,
        {
          foreignKey: "quest_id",
          as: "quest"
        }
      );
    }
  }
  Quest.init({
    name: DataTypes.STRING,
    goal: DataTypes.TEXT,
    status: DataTypes.BOOLEAN,
    delievered_by_character_id: DataTypes.INTEGER,
    got_in_location_id: DataTypes.INTEGER,
    happens_in_location_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Quest',
  });
  return Quest;
};