'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
      await queryInterface.bulkInsert('Games', [
      {title: 'Vall', description: "Freya y Talin están envueltos en una serie de misterios, ¿que encontrarán el las profundidades de las Antípodas Oscuras?", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {title: 'El secreto de Barovia', description: "En lo más profundo de Barovia reside Strahd vigilando a nuestro grupo, ¿Serán capaces de sobrevivir hasta desentrañar lo que ocurre en estas tierras malditas?", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {title: 'La Bóveda del Dragón', description: "Una serie de acontecimientos ha llevado a nuestro grupo a participar en la búsqueda del tesoro escondido por DAgult Neverember en Waterdeep. ¿Conseguiran encontrar el tesoro y seguir con vida?", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
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
