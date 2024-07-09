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
      //JUGADORES
      //Fuera del Abismo
      {name: "Freya", description: "Mediana Exploradora Caminante del Horizonte", world_id: 1, from_location_id: 5, last_location_known_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Tallin", description: "Drow Guerrero Campeón", world_id: 1, from_location_id: 5, last_location_known_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      //El Secreto de Barovia
      {name: "Ilithian", description: "Tiefling Conjuradora de Magia Salvaje", world_id: 1, from_location_id: 7, last_location_known_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Burakku", description: "Humano Guerrero Samurai", world_id: 1, from_location_id: 1, last_location_known_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Cardenal", description: "Humano Clérigo de la Tumba", world_id: 1, from_location_id: 4, last_location_known_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Dorian", description: "Renacido No-Muerto Explorador Caminante del horizonte y Brujo de la No-Muerte", world_id: 1, from_location_id: 9, last_location_known_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      //La Bóveda del Dragón
      {name: "Archibald", description: "Humano Mago Orden de los Escribas", world_id: 1, from_location_id: 6, last_location_known_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Beggend", description: "Humano Pícaro Cuchillo del Alma", world_id: 1, from_location_id: 6, last_location_known_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Cerneas", description: "Humano Druída Círculo de la Luna", world_id: 1, from_location_id: 4, last_location_known_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Dumah", description: "Humano Cazador de Sangre Orden de los Licántropos", world_id: 1, from_location_id: 6, last_location_known_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Rolen", description: "Elfo Explorador Acechador de la Penumbra", world_id: 1, from_location_id: 6, last_location_known_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
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
