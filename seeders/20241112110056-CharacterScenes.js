'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
      await queryInterface.bulkInsert('CharacterScenes', [
        { scene_id: 1, character_id: 1 },
        { scene_id: 1, character_id: 2 },
        { scene_id: 2, character_id: 1 },
        { scene_id: 2, character_id: 2 },
        { scene_id: 3, character_id: 3 },
        { scene_id: 3, character_id: 4 },
        { scene_id: 3, character_id: 5 },
        { scene_id: 3, character_id: 6 },
        { scene_id: 4, character_id: 7 },
        { scene_id: 4, character_id: 8 },
        { scene_id: 4, character_id: 9 },
        { scene_id: 4, character_id: 10 },
        { scene_id: 4, character_id: 11 },
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
