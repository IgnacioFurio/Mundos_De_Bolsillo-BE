'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Characters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      world_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Worlds",
          key:"id",
          allowNull: true
        }
      },
      from_location_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Locations",
          key:"id",
          allowNull: true
        }
      },
      last_location_known_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Locations",
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
    await queryInterface.dropTable('Characters');
  }
};