'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('Characters', [
      {name: "Freya", description: "Mediana Exploradora Caminante del Horizonte", world_id: 1, from_location_id: 1, last_location_known_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Tallin", description: "Drow Guerrero Campeón", world_id: 1, from_location_id: 1, last_location_known_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
