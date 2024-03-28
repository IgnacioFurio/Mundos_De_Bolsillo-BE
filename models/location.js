'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Location.belongsTo(
        models.World,
        {
          foreignKey: "world_id"
        }
      );

      Location.hasMany(
        models.Scene,
        {
          foreignKey: "location_id"
        }
      ); 

      Location.hasMany(
        models.Secret,
        {
          foreignKey: "about_location_id"
        }
      );
      
      Location.hasMany(
        models.Secret,
        {
          foreignKey: "from_location_id"
        }
      );
      
      Location.hasMany(
        models.Secret,
        {
          foreignKey: "heard_on_location_id"
        }
      );
      
      Location.hasMany(
        models.PlaceOfInterest,
        {
          foreignKey: "location_id"
        }
      );
      
      Location.hasMany(
        models.PlaceOfInterest,
        {
          foreignKey: "interesting_location_id"
        }
      );
    }
  }
  Location.init({
    name: DataTypes.STRING,
    world_id: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};