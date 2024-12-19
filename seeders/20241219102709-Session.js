'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example: */
    await queryInterface.bulkInsert('Sessions', [
      { title: "Sesion 0", 
        description: "Entrega de toda la información y quest iniciales de lo personajes",
        game_id: 2, 
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00" 
      },
      { title: "Encuentros inesperados", 
        description: "Los Licantropos del otro lado del Valle han escuchado el retronar de la torre, pese a que Ezmeralda había lgorado dar esquinazo a las criaturas que la perseguian desde Ravenloft aún sigue sin estar a salvo. Los Licántropos tardarán menos de una hora en llegar.", 
        game_id: 2, 
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
