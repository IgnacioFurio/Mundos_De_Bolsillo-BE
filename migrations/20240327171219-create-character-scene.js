'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CharacterScenes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      scene_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Scenes",
          key:"id",
          allowNull: false
        }
      },
      character_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Characters",
          key:"id",
          allowNull: false
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CharacterScenes');
  }
};