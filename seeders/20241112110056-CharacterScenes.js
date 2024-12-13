'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
      await queryInterface.bulkInsert('CharacterScenes', [
        { scene_id: 1, character_id: 1, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00" },
        { scene_id: 1, character_id: 2, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"  },
        { scene_id: 2, character_id: 1, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"  },
        { scene_id: 2, character_id: 2, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"  },
        { scene_id: 3, character_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"  },
        { scene_id: 3, character_id: 4, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"  },
        { scene_id: 3, character_id: 5, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"  },
        { scene_id: 3, character_id: 6, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"  },
        { scene_id: 3, character_id: 78, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"  },
        { scene_id: 4, character_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"  },
        { scene_id: 4, character_id: 4, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"  },
        { scene_id: 4, character_id: 5, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"  },
        { scene_id: 4, character_id: 6, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"  },
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
