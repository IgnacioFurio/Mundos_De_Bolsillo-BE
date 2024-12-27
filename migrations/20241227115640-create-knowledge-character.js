'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('KnowledgeCharacters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      knowledge_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Knowledge",
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
      session_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Sessions",
          key:"id",
          allowNull: true
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
    await queryInterface.dropTable('KnowledgeCharacters');
  }
};