'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('Quests', [
      {
        name: 'Buscar a Jayce', 
        goal: "Buscar información acerca del archimago líder de amanecer", 
        status: false, 
        delievered_by_character_id: 1, 
        got_in_location_id: 5,
        happens_in_location_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: 'Buscando Gravenhollow', 
        goal: "Tallada hace mucho tiempo en los huesos del mundo y protegida por antigua y potente magia", 
        status: false, 
        delievered_by_character_id: 1, 
        got_in_location_id: 5,
        happens_in_location_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
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
