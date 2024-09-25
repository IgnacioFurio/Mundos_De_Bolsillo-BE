'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
      await queryInterface.bulkInsert('Characterquests', [
        { character_id: 1, quest_id: 1, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00" },
        { character_id: 2, quest_id: 2, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00" },
        { character_id: 3, quest_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00" },
        { character_id: 4, quest_id: 4, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00" },
        { character_id: 5, quest_id: 5, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00" },
        { character_id: 6, quest_id: 6, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00" },
        { character_id: 7, quest_id: 7, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00" },
        { character_id: 8, quest_id: 8, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00" },
        { character_id: 9, quest_id: 9, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00" },
        { character_id: 10, quest_id: 10, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00" },
        { character_id: 11, quest_id: 11, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00" },
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
