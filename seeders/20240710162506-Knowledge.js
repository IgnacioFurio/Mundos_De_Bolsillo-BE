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
      //Freya
      {title: "Mirada asesina", description: "Dicen que si Freya te mira diractemente a los ojos puede hacer que tu cabeza explote.", veracity: false, about_character_id: 1, heard_from_character_id: null, about_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {title: "Cámara del tesoro", description: "Freya esconde una fortuna digna de una familia noble bajo su posada.", veracity: false, about_character_id: 1, heard_from_character_id: null, about_location_id: 5, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {title: "La Élite", description: "Freya pertenece a la élite de la Costa de la Espada, una antigua organización secreta que domina el porvenir de Faerûn.", veracity: false, about_character_id: 1, heard_from_character_id: null, about_location_id: 2, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      //Tallin
      {title: "Parte de la mafia", description: "Tallin ha trabajado para varias mafias a lo largo de su vida.", veracity: true, about_character_id: 2, heard_from_character_id: null, about_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {title: "Tráficante de armas", description: "Tallin se dedicaba al comercio clandestino de armas y sustancias estupefacientes.", veracity: true, about_character_id: 2, heard_from_character_id: null, about_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {title: "Sádico asesino", description: "En el pasado Tallin era conocido por ser extremadamente sádico con sus congéneres.", veracity: true, about_character_id: 2, heard_from_character_id: null, about_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      //Ilithian
      {title: "Pirómana", description: "Ilithian ama hacer arder todo a su alrededor sin motivo aparente.", veracity: false, about_character_id: 3, heard_from_character_id: null, about_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {title: "Un maestro en apuros", description: "Ilithian anda tras las pistas de su maestro Khazûm, todo indica que está muerto, pero hay una pequeña pista que podría apuntar a lo contrario.", veracity: true, about_character_id: 3, heard_from_character_id: null, about_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {title: "La hija de Zariel", description: "Hace años una secta realizó un ritual para invocar a la hija de Zariel en el cuerpo de una recién nacida Ilithian.", veracity: true, about_character_id: 3, heard_from_character_id: null, about_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      //Buraku
      {title: "Guerrero Feérico", description: "Unos espíritus encargados de cazar demonios que salen del averno han entrenado a Burakku para que sea un cazador más.", veracity: true, about_character_id: 4, heard_from_character_id: null, about_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {title: "Un amor secreto", description: "Burakku y Hakuni eran alumno y maestro durante el día y amantes a la luz de la luna.", veracity: true, about_character_id: 4, heard_from_character_id: null, about_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {title: "Miedo a los fantasmas", description: "Desde niño Burakku ha tenido pánico a los espíritus de la noche.", veracity: false, about_character_id: 4, heard_from_character_id: null, about_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      //Cardenal
      {title: "Limpiador espiritual", description: "Cardenal limpia el mundo de espíritus que se quedan atascados en los planos interiores.", veracity: true, about_character_id: 5, heard_from_character_id: null, about_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {title: "Destierro permanente", description: "Debido a un trabajo que no salió como tocaba Cardenal ha sido desterrado de su orden hasta demostrar su valía.", veracity: false, about_character_id: 5, heard_from_character_id: null, about_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {title: "Tarta de Manzana", description: "Cardenal dirige una pequeña agencia de investigadores de los paranormal.", veracity: false, about_character_id: 5, heard_from_character_id: null, about_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      //Dorian  
      {title: "Dos muertos y un destino", description: "Dorian es un cuerpo resucitado al cúal se le ha pegado un alma enfadada dispuesta a cederle poderes y conocimiento a cambio de eliminar juntos al conde Strahd.", veracity: true, about_character_id: 6, heard_from_character_id: null, about_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {title: "Una belleza desorbitante", description: "Dicen que nunca muestra su rostro porque es tan bello que arrancaría la envidia de todo el mundo a su alrededor.", veracity: false, about_character_id: 6, heard_from_character_id: null, about_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {title: "Incansable", description: "Al no necesitar dormir, Dorian es un monstruo especializado en cazar monstruos, te perseguirá indefinidamente hasta darte caza.", veracity: true, about_character_id: 6, heard_from_character_id: null, about_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      //Cerneas
      {title: "Doppelganger", description: "Cerneas es en realidad un doppelganger.", veracity: true, about_character_id: 9, heard_from_character_id: null, about_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {title: "Druida", description: "Cerneas puede cambiar su forma a la de un animal.", veracity: true, about_character_id: 9, heard_from_character_id: null, about_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {title: "Abandonado por su padre", description: "El padre de Cerneas era un doppelganger que huyó al enterarse de que iba a ser padre.", veracity: true, about_character_id: 9, heard_from_character_id: null, about_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
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
