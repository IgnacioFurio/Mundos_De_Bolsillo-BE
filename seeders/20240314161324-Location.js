'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('Locations', [
      //ABEIR TORIL
      {name: "Kozakura", world_id: 1, description: "La isla-reino de Kozakura es el rival habitual de Wa. Lleno de hermosas montañas, está habitado por humanos y por los Koropokkuru, la sub-raza oriental de los enanos.", type: "", government: "", population: 0, defenses: "", commerce: "", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Faerûn", world_id: 1, description: "Un lugar de increíbles bellezas y proliferantes maravillas, místicas herencias y algunos sitios, de maldad ancestral. Las gentes libres de Faerûn empujan la indomable naturaleza con sus ciudadelas de cultura, mientras, que de lo desconocido...sombras de ruinas caídas y cavernas sin fin llenan las entrañas de estas tierras con la promesa de peligro y, de gloria.\n Los dioses tienen un interés muy activo en la formación del mundo de sus adoradores, mientras la búsqueda de potencial arcano siempre latente a traer una nueva era de prosperidad ...o destrucción.\n Este es el mundo de los Reinos Olvidados®.", type: "", government: "", population: 0, defenses: "", commerce: "", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Phandalin", world_id: 1, description: "Pequeño asentamiento cerca de las minas de Phandelver", type: "Villa", government: "Democrático", population: 40, defenses: "Los propios vecinos de Phandalin están siendo entrenados por la Orden del Guatelete para que puedan defenderse.", commerce: "Las única ruta comercial que a día de hoy atraviesa Phandalin es por tierra, aunque la gente aún teme los caminos que llevan a este pueblo, los rumores dicen que el camino vuelve a ser transitable.", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Waterdeep", world_id: 1, description: "Ciudad de los Esplendores", type: "Ciudad", government: "Oligarquía", population: 200000, defenses: "La defensa de la ciudad se organiza a varios niveles, desde la Guardia de la Ciudad patrullando las calles a pie, o los cielos a grifo, hasta la Orden Vigilante de Magos y Protectores, siempre dispuestos a colaborar juntos para asegurar la paz.", commerce: "La mayor ruta comercial de la Costa de la Espada hace escala en el puerto de WAterdeep, haciendo de esta ciudad un lugar ideal para encontrar casi cualquier cosa que puedas imaginar.", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "El Cráneo del Troll", world_id: 1, description: "Taberna regentada por Freya y Tuerto.", type: "Taberna y Guarida", government: "Negocio", population: 7, defenses: "La organización de la mesa defiende este emplazamiento.", commerce: "Taberna", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "La Rosa de los Vientos", world_id: 1, description: "Taberna regentada por Archibald, Beggend, Dumah y Rolen.", type: "Taberna y Guarida", government: "Negocio", population: 7, defenses: "Los regentes de la Taberna y sus aliados.", commerce: "Taberna", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Aldea de Morbur", world_id: 1, description: "La aldea de Morbur se encuentra cerca de la fortaleza del lago habiendo prosperado durante los últimos cien años. En el centro de la Plaza Mayor se alza un gran Roble que guarda los cuerpos de los heroes caídos en la batalla de Morbur", type: "Fortaleza", government: "Oligarquía", population: 300, defenses: "LA Orden del Pico de Plata", commerce: "", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      //BAROVIA
      {name: "La Villa de Barovia", world_id: 2, description: "La villa de Barovia es el lugar más triste en estas tierras, sus residentes tan temerosos de Strahd que rara vez se aventuran fuera de sus hogares. La villa se halla a la sombra del Castillo Ravenloft, enterrada en la niebla, pero sin embargo todavía incapaz de esconderse de la vista del vampiro.", type: "Villa", government: "", population: 200, defenses: "No hay defensas especializadas en la Villa dado que la sombra de Strahd siempre vigila esta población.", commerce: "Lo único parecido a un comercio en la Villa es una taberna en la plaza Mayor.", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      //RAVNICA
      {name: "Distrito 10", world_id: 3, description: "El décimo distrito es un lugar en expansión. Para ser gobernado eficazmente, se divide en seis recintos, cada uno del tamaño de una pequeña ciudad.", type: "", government: "", population: 0, defenses: "", commerce: "", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
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
