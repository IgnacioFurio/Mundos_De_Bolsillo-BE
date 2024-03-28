'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Secrets', {
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
      about_character_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Characters",
          key:"id",
          allowNull: false
        }
      },
      told_from_character_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Characters",
          key:"id",
          allowNull: false
        }
      },
      about_location_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Locations",
          key:"id",
          allowNull: false
        }
      },
      from_location_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Locations",
          key:"id",
          allowNull: false
        }
      },
      heard_on_location_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Locations",
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
    await queryInterface.dropTable('Secrets');
  }
};