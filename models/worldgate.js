'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorldGate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      WorldGate.belongsTo(
        models.Game,
        {
          foreignKey: "game_id"
        }
      );
      WorldGate.belongsTo(
        models.World,
        {
          foreignKey: "world_id"
        }
      );
    }
  }
  WorldGate.init({
    game_id: DataTypes.INTEGER,
    world_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'WorldGate',
  });
  return WorldGate;
};