'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('Locations', [
      {name: "Waterdeep", world_id: 1, description: "Ciudad de los Esplendores", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Phandalin", world_id: 1, description: "Pequeño asentamiento cerca de las minas de Phandelver", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "El Cráneo del Troll", world_id: 1, description: "Taberna regentada por Freya y Tuerto.", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Distrito 10", world_id: 2, description: "El décimo distrito es un lugar en expansión. Para ser gobernado eficazmente, se divide en seis recintos, cada uno del tamaño de una pequeña ciudad.", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
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
