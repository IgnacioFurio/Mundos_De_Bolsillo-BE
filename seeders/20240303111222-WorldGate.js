'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('WorldGates', [
      {game_id: 1, world_id: 1,createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {game_id: 1, world_id: 2,createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
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
