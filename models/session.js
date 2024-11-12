'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Session extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Session.hasMany(
        models.Scene,
        {
          foreignKey: "session_id"
        }
      );

      Session.belongsTo(
        models.Game,
        {
          foreignKey: "game_id"
        }
      );

    }
  }
  Session.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    game_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Session',
  });
  return Session;
};