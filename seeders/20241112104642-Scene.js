'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
      await queryInterface.bulkInsert('Scenes', [
        { 
          title: "Disturbios en el mercado", 
          description: "Al llegar a Mantol Derith nuestros personajes se encuentran con que el caos a invadido la ciudad.", 
          location_id: 8, 
          game_id: 1,
          session_id: null,
          createdAt: "2023-02-22 00:00:00", 
          updatedAt: "2023-02-22 00:00:00" 
        },
        { 
          title: "Veldiskar", 
          description: "Cuando los personajes se hallen a menos de un día de viaje de Gravenhollow, escucharán a alguien cantando extrañas tonadas en varios idiomas, el eco de las voces resuena por los túneles. Al aproximarse a los ruidos, aparecerá un basilisco llamado Veldyskar descansando en una bifurcación. Para nada un basilisco ordinario, Veldyskar tiene una inteligencia de 10 (+0) y habla Común, Enano, Gigante e Infracomún. Un pequeño grupo que estén explorando pueden acercarse sigilosamente a Veldiskar con un control de grupo exitoso de Destreza (Sigilo). Cualquier personaje que observe al basilisco podrá notar que dirige sus ojos mirando hacia el suelo, como si estuviera intentando de forma consciente controlar su mirada petrificadora. Cuando Veldyskar sea consciente de la presencia de los personajes, les llamará, hablando en todos los idiomas que conoce, hasta determinar que los personajes comprenden el Común. Un reptil con muchas patas se despereza como si hubiera estado sentado mucho tiempo, evitando vuestras miradas mientras dirige la vista hacia el suelo de rocas bajo vuestros pies. “¡Ya era hora de que vuestro grupo llegara! ¡Venid! La biblioteca me dijo que os guíara hasta las puertas, y ya os he esperado demasiado tiempo.", 
          location_id: 8, 
          game_id: 1,
          session_id: null,
          createdAt: "2023-02-22 00:00:00", 
          updatedAt: "2023-02-22 00:00:00" 
        },
        { 
          title: "Cena con Strahd", 
          description: "Después de una pequeña conversación dónde contará la historia del Castillo de Ravenloft el conde se levantará del órgano y se sentará en la mesa sin probar un solo bocado. \n Strahd está predispuesto a hablar del presente de estas tierras, de como los vampiros más jóvenes están perdiendo el control sobre sus ansias de sangre y el trata de proteger a todas las almas que quedan vivas luchando contra estos vampiros asalvajados.\n Tras esto ofrecerá a los personajes protección en su castillo a cambio de limpiar las tierras de Barovia de traidores (incluyendo a aquellas personas que están pensando en iniciar una revolución)",
          location_id: 2, 
          game_id: 2,
          session_id: null,
          createdAt: "2023-02-22 00:00:00", 
          updatedAt: "2023-02-22 00:00:00" 
        },
        { 
          title: "Ayuda de las Manos Inspiradas", 
          description: "Tras el reciente asalto en el callejón Beggend ha caído y no tiene constantes vitales, es el momento de pedir ayuda a viejos aliados.", 
          location_id: 4, 
          game_id: 3,
          session_id: null,
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
