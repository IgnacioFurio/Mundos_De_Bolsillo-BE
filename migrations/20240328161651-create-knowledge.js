'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Knowledge', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      veracity: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      about_character_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Characters",
          key:"id",
          allowNull: true
        }
      },
      heard_from_character_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Characters",
          key:"id",
          allowNull: true
        }
      },
      about_location_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Locations",
          key:"id",
          allowNull: true
        }
      },
      heard_on_location_id: {
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
    await queryInterface.dropTable('Knowledge');
  }
};