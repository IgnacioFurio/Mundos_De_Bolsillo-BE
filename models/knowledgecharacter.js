'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class KnowledgeCharacter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      KnowledgeCharacter.belongsTo(
        models.Character,
        {
          foreignKey: "character_id",
          as: "character"
        }
      );
      
      KnowledgeCharacter.belongsTo(
        models.Session,
        {
          foreignKey: "session_id",
          as: "session"
        }
      );
    }
  }
  KnowledgeCharacter.init({
    knowledge_id: DataTypes.INTEGER,
    character_id: DataTypes.INTEGER,
    session_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'KnowledgeCharacter',
  });
  return KnowledgeCharacter;
};