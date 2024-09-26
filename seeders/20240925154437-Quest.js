'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * */
      await queryInterface.bulkInsert('Quests', [
        { name: "Visita a Mantol Derith", goal: "Establecer contactos y aliados en las antípodas oscuras es crucial para descubrir que más está pasando por las Antípodas Oscuras.", status: true, delievered_by_character_id: null, got_in_location_id: null, happens_in_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00" },
        { name: "La espada más letal", goal: "La voluntad de un guerrero lo es todo, y la voluntad de Tallin en convertirse en el mejor espadachin del mundo no tiene límites.", status: true, delievered_by_character_id: null, got_in_location_id: null, happens_in_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00" },
        { name: "Buscando a Khazûm", goal: "El maestro de Ilithian ha sido encarceldo en Waterdeep por atentar contra la vida de una noble, la organización Pico de Plata ha ordenado no interferir en el juicio.", status: true, delievered_by_character_id: null, got_in_location_id: null, happens_in_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00" },
        { name: "Demonios en la oscuridad", goal: "Durante años espíritus guardianes del mundo feérico han entrenado guerreros como Burakku para proteger el plano Material de los demonios.", status: true, delievered_by_character_id: null, got_in_location_id: null, happens_in_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00" },
        { name: "Papa Cardenal", goal: "La orden de los Fantasmas está probando las capacidades de Cardenal para convertirse en el próximo papa de la orden.", status: true, delievered_by_character_id: null, got_in_location_id: null, happens_in_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00" },
        { name: "Venganza", goal: "El conde Strahd durante años se ha dedicado a destruir familias enteras con sus caprichos, uniendo así a dos padres con ganas de venganza, Dorian y Van Richten.", status: true, delievered_by_character_id: null, got_in_location_id: null, happens_in_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00" },
        { name: "La búsqueda del conocimiento", goal: "Archibal siempre ha sido una rata de biblioteca y siempre lo será.", status: false, delievered_by_character_id: true, got_in_location_id: null, happens_in_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00" },
        { name: "Encontrar a Lumina", goal: "Beggend vió por última vez a su hermana Lumina durante el incidente con la brecha entre planos que sucedió de niños, pese a que le aseguraron que todos murieros menos el, está convencido de que su hermaa sigue viva en algún lugar.", status: true, delievered_by_character_id: null, got_in_location_id: null, happens_in_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00" },
        { name: "Proteger a Neverember", goal: "Neverember es casi como un hermano para Cerneas, se han criado juntos y no permitiría que le ocurriera nada.", status: true, delievered_by_character_id: null, got_in_location_id: null, happens_in_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00" },
        { name: "Cuidando el negocio familiar", goal: "La familia de Dumah se han dedicado a perfeccionar el arte de las flechas y virotes, llevan un par de generaciones vendiendo su mercancia en una tienda en Waterdeep, y esperemos que sigan ahí por muchos años.", status: true, delievered_by_character_id: null, got_in_location_id: null, happens_in_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00" },
        { name: "Vampiros en la oscuridad", goal: "Un vampiro acabo con la familia de Rolen y desde entonces se ha jurado acabar con cada uno que se cruce en su camino.", status: true, delievered_by_character_id: null, got_in_location_id: null, happens_in_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00" },
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
