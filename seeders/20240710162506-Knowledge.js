'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('Knowledge', [
      //Tallin
      {title: "La venganza de Tallin", description: "Tallin está planeando vengarse de tu familia.", veracity: false, about_character_id: 2, told_from_character_id: null, about_location_id: null, from_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {title: "Parte de la mafia", description: "Tallin ha trabajado para varias mafias a lo largo de su vida.", veracity: true, about_character_id: 2, told_from_character_id: null, about_location_id: null, from_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {title: "Tráficante de armas", description: "Tallin se dedicaba al comercio clandestino de armas y sustancias estupefacientes.", veracity: true, about_character_id: 2, told_from_character_id: null, about_location_id: null, from_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {title: "Sádico asesino", description: "En el pasado Tallin era conocido por ser extremadamente sádico con sus congéneres.", veracity: true, about_character_id: 2, told_from_character_id: null, about_location_id: null, from_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {title: "Amores del pasado", description: "Tallin estáa completamente enamorado de Wood Lee.", veracity: false, about_character_id: 2, told_from_character_id: null, about_location_id: null, from_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
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
