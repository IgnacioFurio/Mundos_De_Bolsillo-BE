'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PlaceOfInterest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PlaceOfInterest.belongsTo(
        models.Location,
        {
          foreignKey: "location_id"
        }
      );
      
      PlaceOfInterest.belongsTo(
        models.Location,
        {
          foreignKey: "interesting_location_id"
        }
      );
    }
  }
  PlaceOfInterest.init({
    location_id: DataTypes.INTEGER,
    interesting_location_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PlaceOfInterest',
  });
  return PlaceOfInterest;
};