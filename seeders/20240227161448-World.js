'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('Worlds', [
      {name: 'Faerûn', description: "Un lugar de increíbles bellezas y proliferantes maravillas, místicas herencias y algunos sitios, de maldad ancestral. Las gentes libres de Faerûn empujan la indomable naturaleza con sus ciudadelas de cultura, mientras, que de lo desconocido...sombras de ruinas caídas y cavernas sin fin llenan las entrañas de estas tierras con la promesa de peligro y, de gloria.\n Los dioses tienen un interés muy activo en la formación del mundo de sus adoradores, mientras la búsqueda de potencial arcano siempre latente a traer una nueva era de prosperidad ...o destrucción.\n Este es el mundo de los Reinos Olvidados®.", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: 'Ravnica', description: "Rávnica es una vasta metrópolis mundial, un tapiz de grandes salones, distritos decrépitos, antiguas ruinas y capa sobre capa de estructuras de piedra. De los incontables centros cívicos del mundo, uno sobresale de los demás: la Ciudad de Rávnica, una metrópolis tan vasta que hace tiempo que su nombre es sinónimo del plano entero. Aquí, entre los laberintos de calles y torres góticas, los gremios de Rávnica luchan por el control y el poder. Los gremios de Rávnica estuvieron en guerra por siglos, intentando gobernar unos sobre otros. Luego pasó algo que detuvo a los gremios: los espíritus de los muertos permanecían en el mundo. Los líderes de los gremios acordaron dirigir su energía a investigar el fenómeno, lo que llevó a la firma del Pacto entre Gremios, un antiguo acuerdo que establecía una paz relativa en el plano.", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: 'La Tierra', description: "Nuestro hogar, el planeta Tierra, es un planeta terrestre y rocoso. Tiene una superficie sólida y activa, con montañas, valles, cañones, llanuras y mucho más. La Tierra es especial porque es un planeta océano, ya que el agua cubre el 70% de su superficie.", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
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
