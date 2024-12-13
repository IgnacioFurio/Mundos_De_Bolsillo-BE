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
      {name: "Dorian", description: "Renacido No-Muerto Explorador Caminante del horizonte y Brujo de la No-Muerte", world_id: 1, from_location_id: 4, last_location_known_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      //La Bóveda del Dragón
      {name: "Archibald", description: "Humano Mago Orden de los Escribas", world_id: 1, from_location_id: 6, last_location_known_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Beggend", description: "Humano Pícaro Cuchillo del Alma", world_id: 1, from_location_id: 6, last_location_known_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Cerneas", description: "Humano Druída Círculo de la Luna", world_id: 1, from_location_id: 4, last_location_known_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Dumah", description: "Humano Cazador de Sangre Orden de los Licántropos", world_id: 1, from_location_id: 6, last_location_known_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Rolen", description: "Elfo Explorador Acechador de la Penumbra", world_id: 1, from_location_id: 6, last_location_known_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      //BAROVIA NPC
      //Villa de Barovia
      {
        name: "Kolyan Indirovich",
        description: "El difunto burgomaestre de la Villa de Barovia, cuyo fallecimiento dejó un vacío en el liderazgo local.",
        world_id: 2,
        from_location_id: 13,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Ireena Kolyana",
        description: "Hija adoptiva del burgomaestre, acosada por Strahd debido a su parecido con Tatyana.",
        world_id: 2,
        from_location_id: 13,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Ismark Kolyanovich",
        description: "Hijo de Kolyan Indirovich, apodado 'Ismark el Menor', que busca proteger a su hermana Ireena.",
        world_id: 2,
        from_location_id: 13,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Father Donavich",
        description: "El sacerdote local, quebrado por la tragedia de su hijo convertido en engendro vampírico.",
        world_id: 2,
        from_location_id: 13,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Doru",
        description: "Hijo del Padre Donavich, ahora un engendro vampírico atrapado en la iglesia.",
        world_id: 2,
        from_location_id: 13,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Bildrath Cantemir",
        description: "Dueño de la tienda general de la Villa, conocido por cobrar precios exorbitantes.",
        world_id: 2,
        from_location_id: 13,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Parriwimple",
        description: "Sobrino de Bildrath y su guardaespaldas musculoso pero ingenuo.",
        world_id: 2,
        from_location_id: 13,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Mad Mary",
        description: "Una mujer angustiada que llora la desaparición de su hija.",
        world_id: 2,
        from_location_id: 13,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Alenka",
        description: "Una de las dueñas de la taberna 'La Sangre de la Viña'. Es pragmática y siempre trata de mantener el negocio en funcionamiento a pesar de las dificultades.",
        world_id: 2,
        from_location_id: 13,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Mirabel",
        description: "Co-dueña de la taberna 'La Sangre de la Viña', es más amable y trata de hacer que los visitantes se sientan bienvenidos.",
        world_id: 2,
        from_location_id: 13,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Sorvia",
        description: "La tercera dueña de la taberna 'La Sangre de la Viña'. Es reservada y suele observar a los clientes con ojo crítico.",
        world_id: 2,
        from_location_id: 13,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Arik",
        description: "El camarero de 'La Sangre de la Viña', servicial pero reservado, con una mirada siempre vigilante.",
        world_id: 2,
        from_location_id: 13,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      //Campamento del estanque Tser
      {
        name: "Stanimir",
        description: "Anciano líder del campamento Vistani junto al estanque Tser, cuenta historias sobre Strahd y guía a los viajeros.",
        world_id: 2,
        from_location_id: 15,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Damia",
        description: "Hija de Stanimir, es hospitalaria y actúa como intermediaria para los visitantes en el campamento.",
        world_id: 2,
        from_location_id: 15,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Ratka",
        description: "Hijo de Stanimir, un joven que cuenta con entusiasmo historias de los Vistani y sus tradiciones.",
        world_id: 2,
        from_location_id: 15,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Madame Eva",
        description: "Misteriosa líder espiritual de los Vistani, conocida por sus poderosas habilidades de adivinación. Vive cerca del campamento.",
        world_id: 2,
        from_location_id: 15,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      //Castillo de Ravenloft
      {
        name: "Strahd von Zarovich",
        description: "El poderoso y temido vampiro señor de Barovia, gobernante del Castillo de Ravenloft. Carismático y cruel, obsesionado con Ireena por su parecido con Tatyana.",
        world_id: 2,
        from_location_id: 19,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Rahadin",
        description: "El leal chambelán y consejero de Strahd, conocido por su aura de gritos agonizantes y su fría eficiencia.",
        world_id: 2,
        from_location_id: 19,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Escher",
        description: "Uno de los consortes vampíricos de Strahd, de naturaleza sarcástica y rebelde.",
        world_id: 2,
        from_location_id: 19,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Anastasia",
        description: "Una de las consortes vampíricas de Strahd, conocida por su elegancia y crueldad.",
        world_id: 2,
        from_location_id: 19,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Gertruda",
        description: "La hija de Mad Mary, ahora cautiva de Strahd en el Castillo de Ravenloft.",
        world_id: 2,
        from_location_id: 19,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Cyrus Belview",
        description: "El sirviente mutado del castillo, leal a Strahd. Tiene un comportamiento errático pero conoce los secretos del lugar.",
        world_id: 2,
        from_location_id: 19,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Patrina Velikovna",
        description: "El espíritu de una elfa que una vez fue amante de Strahd. Sus restos se encuentran en el castillo.",
        world_id: 2,
        from_location_id: 19,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Sir Klutz Trémulo del Escudo Sombrío",
        description: "El fantasma de un caballero tragicómico que vaga por los pasillos del castillo, atormentado por sus fracasos en vida.",
        world_id: 2,
        from_location_id: 19,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      //Ciudad de Vallaki
      {
        name: "Viktor Vallakovich",
        description: "El hijo del burgomaestre de Vallaki, un joven nervioso que a menudo se ve afectado por la presión de las expectativas familiares.",
        world_id: 2,
        from_location_id: 23,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Baron Vargas Vallakovich",
        description: "Burgomaestre de Vallaki, un hombre decidido que busca mantener el orden en su ciudad a toda costa, incluso a través de la tiranía.",
        world_id: 2,
        from_location_id: 23,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Fiona Wachter",
        description: "Una noble de Vallaki, conocida por sus opiniones políticas y su enemistad con el burgomaestre, secretamente ambiciona el poder.",
        world_id: 2,
        from_location_id: 23,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Ludmilla Wachter",
        description: "La hija mayor de Fiona, una mujer ambiciosa y calculadora que apoya la lucha de su madre por el poder en Vallaki.",
        world_id: 2,
        from_location_id: 23,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Nikolaus Wachter",
        description: "El hijo menor de Fiona, un joven influenciado por las políticas radicales de su madre y su hermana.",
        world_id: 2,
        from_location_id: 23,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Rictavio",
        description: "Un misterioso forastero y dueño de un carro de circo ambulante. En realidad, es un aventurero que trabaja en secreto.",
        world_id: 2,
        from_location_id: 23,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Bluto Krogarov",
        description: "Un pescador de Vallaki con una personalidad inquietante, conocido por sus extraños comportamientos y su actitud despreciativa hacia los demás.",
        world_id: 2,
        from_location_id: 23,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "The Martikov Family",
        description: "La familia Martikov es una entidad unitaria que regenta la taberna 'El Cuervo Alegre'. Son conocidos por su resistencia secreta contra Strahd y su lealtad a Ireena. Los miembros más destacados incluyen a Davian Martikov, su esposa, y sus hijos.",
        world_id: 2,
        from_location_id: 23,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Davian Martikov",
        description: "El patriarca de la familia Martikov, un hombre sabio y un líder discreto de la resistencia contra Strahd. Dueño de la taberna 'El Cuervo Alegre'.",
        world_id: 2,
        from_location_id: 23,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Sasha Martikov",
        description: "Un miembro de la familia Martikov, conocido por su amabilidad y su dedicación a la protección de la familia.",
        world_id: 2,
        from_location_id: 23,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Udo Martikov",
        description: "Otro miembro de la familia Martikov, un hombre reservado y serio, pero profundamente leal a su familia y la causa.",
        world_id: 2,
        from_location_id: 23,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Krezka",
        description: "Líder del pueblo cercano al Lago Zarovich, Krezka, conocido por su sabiduría y por ser un aliado de Ireena en la lucha contra Strahd.",
        world_id: 2,
        from_location_id: 23,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      //Viejo Muelehuesos
      {
        name: "Morgantha",
        description: "Una anciana bruja que lidera la operación en el Molino Muelehuesos. Aparentemente amable, pero en realidad fabrica pasteles mágicos a partir de las almas de los niños.",
        world_id: 2,
        from_location_id: 24,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Bella Sunbane",
        description: "Una de las hijas de Morgantha, astuta y servicial. Participa activamente en las operaciones oscuras del molino.",
        world_id: 2,
        from_location_id: 24,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Offalia Wormwiggle",
        description: "La otra hija de Morgantha, más introvertida pero igual de peligrosa. Su especialidad son los hechizos de manipulación.",
        world_id: 2,
        from_location_id: 24,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Almas atrapadas",
        description: "Un grupo de espíritus infantiles cuyas almas han sido utilizadas para crear los pasteles mágicos. Aunque no interactúan directamente, su presencia es palpable en el molino.",
        world_id: 2,
        from_location_id: 24,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      //Argynvoltholt
      {
        name: "Vladimir Horngaard",
        description: "El líder de los Caballeros de la Orden del Dragón de Plata. Ahora, un caballero de la muerte lleno de rencor contra Strahd y el mundo.",
        world_id: 2,
        from_location_id: 26,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Sir Godfrey Gwilym",
        description: "El amante y teniente de Vladimir. Aunque también es un caballero de la muerte, mantiene un poco de humanidad y busca liberar a Vladimir de su odio.",
        world_id: 2,
        from_location_id: 26,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Argynvost",
        description: "El espíritu del dragón plateado que da nombre al castillo. Lucha por recuperar su honor y proteger Barovia, incluso después de la muerte.",
        world_id: 2,
        from_location_id: 26,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Espectros de la Orden",
        description: "Fantasmas de los antiguos Caballeros de la Orden del Dragón de Plata, atrapados en el castillo. Algunos ayudan a los aventureros, mientras que otros son hostiles.",
        world_id: 2,
        from_location_id: 26,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Fantasmas en pena",
        description: "Espíritus atormentados que deambulan por Argynvostholt, encarnaciones del dolor y la traición sufrida por la Orden.",
        world_id: 2,
        from_location_id: 26,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      //Krezk
      {
        name: "Dimitri Krezkov",
        description: "El burgomaestre de Krezk, un hombre práctico y justo que lidera la aldea con dedicación y prudencia.",
        world_id: 2,
        from_location_id: 28,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Anna Krezkova",
        description: "Esposa de Dimitri Krezkov, una mujer amable que desempeña un papel importante en la vida comunitaria de Krezk.",
        world_id: 2,
        from_location_id: 28,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Ilya Krezkov",
        description: "El hijo de Dimitri y Anna, fallecido prematuramente. Su muerte tuvo un impacto profundo en la familia Krezkov.",
        world_id: 2,
        from_location_id: 28,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      //Ruinas de Beren
      {
        name: "Baba Lysaga",
        description: "Una poderosa bruja que habita en una cabaña mágica en las ruinas de Berez. Está obsesionada con proteger a Strahd, a quien considera su hijo.",
        world_id: 2,
        from_location_id: 30,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "El fantasma de Marina",
        description: "El espíritu de una joven que fue sacrificada por su propio pueblo para intentar detener los avances de Strahd. Su alma vaga por las ruinas, atrapada por el dolor.",
        world_id: 2,
        from_location_id: 30,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "El fantasma del burgomaestre Lazlo Ulrich",
        description: "El espíritu del antiguo líder de Berez, que lleva el peso de la culpa por haber sacrificado a Marina. Ahora vaga por las ruinas, atormentado por su decisión.",
        world_id: 2,
        from_location_id: 30,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Muriel Vinshaw",
        description: "Una wereraven de la familia Martikov, que vigila las actividades de Baba Lysaga en Berez. Leal a la causa de la resistencia contra Strahd.",
        world_id: 2,
        from_location_id: 30,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      //El MAgo de las Viñas
      {
        name: "Davian Martikov",
        description: "El patriarca de la familia Martikov y líder de los wereravens. Amargado por los conflictos con sus hijos, pero dedicado a la protección del viñedo.",
        world_id: 2,
        from_location_id: 32,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Eliza Martikov",
        description: "La hija de Davian Martikov, quien supervisa la producción de vino en el viñedo. Es práctica y valiente, pero guarda resentimiento por la actitud de su padre.",
        world_id: 2,
        from_location_id: 32,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Stefania Martikov",
        description: "La esposa de Davian, que a menudo actúa como mediadora entre su esposo y sus hijos. A pesar de ser amable, también es firme en sus decisiones.",
        world_id: 2,
        from_location_id: 32,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Kellen Martikov",
        description: "Uno de los hijos de Davian, quien se ha distanciado de su familia y se encuentra en desacuerdo con la forma en que su padre maneja las cosas.",
        world_id: 2,
        from_location_id: 32,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Vidal Martikov",
        description: "Otro hijo de Davian, que se siente atrapado entre las expectativas de su padre y las complicaciones con los viñedos.",
        world_id: 2,
        from_location_id: 32,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      //Templo de Ámbar
      {
        name: "Svetlana",
        description: "La sacerdotisa del Templo de Ámbar. Es una mujer amable y de buena voluntad que protege el templo y su reliquia sagrada. Se encuentra en una constante lucha interna debido a la influencia de Strahd sobre el lugar.",
        world_id: 2,
        from_location_id: 33,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "La criatura ámbar",
        description: "Una extraña y antigua criatura que se encuentra atrapada dentro del Templo de Ámbar. Es un ser primordial que emana una energía maléfica y está vinculada a la corrupción del templo.",
        world_id: 2,
        from_location_id: 33,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Cira",
        description: "Una mujer misteriosa que habita en el templo y se cree que tiene conocimientos oscuros sobre las artes arcanas. Algunos dicen que es una antigua sirviente de Strahd que busca redención.",
        world_id: 2,
        from_location_id: 33,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      //Colina de Yester
      {
        name: "Beren",
        description: "Un líder de los hombres lobo de la región, quien comanda una banda de hombres lobo en la Colina de Yester. Es leal a Strahd y actúa como su servidor en la zona.",
        world_id: 2,
        from_location_id: 34,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Yesterhill",
        description: "Un anciano druida que actúa como el líder de los seguidores de Strahd en la Colina de Yester. Es un hechicero poderoso con conocimientos de las fuerzas oscuras que luchan para retener el control sobre la región.",
        world_id: 2,
        from_location_id: 34,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Anya",
        description: "Una druida joven que sigue los caminos oscuros, influenciada por la presencia de Yesterhill. Está dividida entre su devoción por la naturaleza y su lealtad a los druidas malignos que siguen las órdenes de Strahd.",
        world_id: 2,
        from_location_id: 34,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      //Guarida de Licántropos
      {
        name: "Kiril Stoyanovich",
        description: "El líder de la manada de licántropos que habita en la Guarida de Licántropos. Es un hombre lobo feroz y decidido, que lidera a su banda con mano de hierro y está completamente leal a Strahd.",
        world_id: 2,
        from_location_id: 35,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Vladimir Horngaard",
        description: "Un antiguo caballero de Barovia que se transformó en licántropo bajo la maldición de Strahd. Ha perdido gran parte de su humanidad, pero sigue siendo un líder respetado dentro de la manada.",
        world_id: 2,
        from_location_id: 35,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Tasha",
        description: "Una joven licántropa que ha sido acogida por la manada. Aunque leal a Kiril y la causa de los licántropos, lucha con su naturaleza bestial y sus recuerdos humanos.",
        world_id: 2,
        from_location_id: 35,
        last_location_known_id: null,
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"
      },
      //Torre de Van Richten
      {
        name: "Ezmeralda d'Avenir",
        description: "una Vistana de mirada aguda y voluntad indomable, es la protegida de Rudolph van Richten, aunque su primer encuentro con el cazador de vampiros estuvo lejos de ser amistoso. En ese encuentro, la desconfianza y la tensión se desbordaron, y la joven Vistana desafió al hombre que, en un futuro, se convertiría en su mentor. Sin embargo, el destino, en su cruel ironía, los unió. Con el tiempo, Ezmerelda se convirtió en su discípula, aprendiendo no solo las artes de la caza de vampiros, sino también las cicatrices invisibles que acompañan a aquellos que se enfrentan a las fuerzas oscuras de Barovia.",
        world_id: 2,
        from_location_id: 35,
        last_location_known_id: null,
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
