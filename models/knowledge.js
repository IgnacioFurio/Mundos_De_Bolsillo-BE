'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Knowledge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Knowledge.belongsTo(
        models.Character,
        {
          foreignKey: "about_character_id"
        }
      );
      
      Knowledge.belongsTo(
        models.Character,
        {
          foreignKey: "told_from_character_id"
        }
      );
      
      Knowledge.belongsTo(
        models.Location,
        {
          foreignKey: "about_location_id"
        }
      );
      
      Knowledge.belongsTo(
        models.Location,
        {
          foreignKey: "from_location_id"
        }
      );
      
      Knowledge.belongsTo(
        models.Location,
        {
          foreignKey: "heard_on_location_id"
        }
      );
    }
  }
  Knowledge.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    veracity: DataTypes.BOOLEAN,
    about_character_id: DataTypes.INTEGER,
    heard_from_character_id: DataTypes.INTEGER,
    about_location_id: DataTypes.INTEGER,
    heard_on_location_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Knowledge',
  });
  return Knowledge;
};