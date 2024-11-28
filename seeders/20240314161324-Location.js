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
      {name: "Kozakura", world_id: 1, description: "La isla-reino de Kozakura es el rival habitual de Wa. Lleno de hermosas montañas, está habitado por humanos y por los Koropokkuru, la sub-raza oriental de los enanos.", type: "Reino", government: "Shogunato", population: ">1.500.000, sobre todo humanos", defenses: "El cuerpo monchugo se encarga de las tareas jurídicas y administrativas mientras que el cuerpo dokoro hace a la vez de milicia y policia.", commerce: "Aunque viven de manera muy autónoma y sin casi interactuar con el resto del mundo la mayoría del comercio se realiza por el mar, el producto entra por el puerto y se distribuye por el reino.", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Faerûn", world_id: 1, description: "Un lugar de increíbles bellezas y proliferantes maravillas, místicas herencias y algunos sitios, de maldad ancestral. Las gentes libres de Faerûn empujan la indomable naturaleza con sus ciudadelas de cultura, mientras, que de lo desconocido...sombras de ruinas caídas y cavernas sin fin llenan las entrañas de estas tierras con la promesa de peligro y, de gloria.\n Los dioses tienen un interés muy activo en la formación del mundo de sus adoradores, mientras la búsqueda de potencial arcano siempre latente a traer una nueva era de prosperidad ...o destrucción.\n Este es el mundo de los Reinos Olvidados®.", type: "Continente", government: "En el continente existen diversos asentamientos con sus propios gobiernos.", population: "73.000.000", defenses: "No existe un sistema único defensa ya que cada territorio suele forjar sus propias alianzas.", commerce: "Sobretodo depede de la tecnología de cada territorio, de sus recursos y sus necesidades.", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Phandalin", world_id: 1, description: "Pequeño asentamiento cerca de las minas de Phandelver", type: "Villa", government: "Democrático", population: "250, humanos, elfos, enanos y medianos.", defenses: "Los propios vecinos de Phandalin están siendo entrenados por la Orden del Guatelete para que puedan defenderse.", commerce: "Las única ruta comercial que a día de hoy atraviesa Phandalin es por tierra, aunque la gente aún teme los caminos que llevan a este pueblo, los rumores dicen que el camino vuelve a ser transitable.", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Waterdeep", world_id: 1, description: "Ciudad de los Esplendores", type: "Ciudad", government: "Oligarquía", population: "200.000 de prácticamente cualquier raza.", defenses: "La defensa de la ciudad se organiza a varios niveles, desde la Guardia de la Ciudad patrullando las calles a pie, o los cielos a grifo, hasta la Orden Vigilante de Magos y Protectores, siempre dispuestos a colaborar juntos para asegurar la paz.", commerce: "La mayor ruta comercial de la Costa de la Espada hace escala en el puerto de WAterdeep, haciendo de esta ciudad un lugar ideal para encontrar casi cualquier cosa que puedas imaginar.", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "El Cráneo del Troll", world_id: 1, description: "Taberna regentada por Freya y Tuerto.", type: "Taberna y Guarida", government: "Negocio", population: "Hogar de Freya, Tallin y sus amigos", defenses: "La organización de la mesa defiende este emplazamiento.", commerce: "Taberna", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "La Rosa de los Vientos", world_id: 1, description: "Taberna regentada por Archibald, Beggend, Dumah y Rolen.", type: "Taberna y Guarida", government: "Negocio", population: "Hogar de Archibald, Beggend, Dumah , Rolen y sus amigos.", defenses: "Los regentes de la Taberna y sus aliados.", commerce: "Taberna", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Aldea de Morbur", world_id: 1, description: "La aldea de Morbur se encuentra cerca de la fortaleza del lago habiendo prosperado durante los últimos cien años. En el centro de la Plaza Mayor se alza un gran Roble que guarda los cuerpos de los heroes caídos en la batalla de Morbur", type: "Fortaleza", government: "Oligarquía", population: "300, casi todo enanos.", defenses: "LA Orden del Pico de Plata", commerce: "??", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      //ANTÍPODAS OSCURAS
      {name: "Gauntlgrym", world_id: 1, description: "Gauntlgrym es una ciudad tallada en la roca viva, con salones y pasadizos lo suficientemente grandes como para que incluso los dragones más grandes puedan andar por ellos. Hay cientos de niveles, serpenteantes escaleras, ascensores funcionando, y un sistema de vagonetas mineras que entran y salen del centro de conexión principal que es el tabernáculo de Hierro", type: "Ciudad", government: "Monarquía", population: "200, casi todo enanos.", defenses: "Guardias veteranos enanos", commerce: "Inactivo de momento.", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      //BAROVIA
      {
        name: "Camino Antiguo de Svalich", 
        world_id: 2, 
        description: "Un camino fangoso en cuyos alrededores están invadidos de charcos de agua negra como espejos oscuros. A ambos lados de la carretera se alzan árboles gigantescos cuyas ramas arañan la niebla.", 
        type: "Camino", 
        government: "Ninguno", 
        population: "Criaturas de bosque.", 
        defenses: "Criaturas de bosque.", 
        commerce: "Los Vistani recorren con sus carromatos estos caminos continuamente.", 
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Puertas de Barovia", 
        world_id: 2, 
        description: "La niebla se desliza como un manto espectral desde el bosque, devorando el camino que se pierde en la lejanía. Más adelante, entre los árboles oscuros y opresivos que flanquean el sendero, emergen imponentes contrafuertes de piedra, sus siluetas grises quedan difuminadas por el velo de la niebla. Unas enormes puertas de hierro cuelgan pesadamente de los muros, el rocío brilla en sus barrotes corroídos como lágrimas frías y persistentes. A cada lado de la entrada, dos estatuas decapitadas de guardianes armados vigilan en un silencio eterno. Sus cabezas caídas reposan, ahora olvidadas, entre las malezas que invaden el suelo. Solo el mutismo inquietante de este umbral parece darte la bienvenida.", 
        type: "Muro",
        government: "Criaturas de bosque",
        population: "Criaturas de bosque",
        defenses: "Criaturas al servicio de Strahd",
        commerce: "Los Vistani que recorren los caminos de Barovia",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Bosque de Svalich", 
        world_id: 2, 
        description: "Árboles imponentes cuyas copas se pierden en una densa niebla gris bloquean todo excepto una tenue y mortecina luz. Los troncos están antinaturalmente cercanos entre sí, como si el bosque estuviera estrangulado por su propia densidad. En el aire reina el silencio sepulcral de una tumba olvidada, aunque el ambiente vibra con la opresiva sensación de un grito atrapado, nunca pronunciado.", 
        type: "Bosque",
        government: "Criaturas de bosque",
        population: "Criaturas de bosque",
        defenses: "Criaturas al servicio de Strahd",
        commerce: "Ninguno",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Río Ivlis", 
        world_id: 2, 
        description: "Este río fluye tan cristalino como un cielo azul en pleno invierno, serpenteando con serenidad a través del valle. Su cauce se extiende unos 50 pies de ancho, y sus aguas tienen una profundidad variable, oscilando entre los 5 y 10 pies. A pesar de su calma aparente, hay algo en la corriente que evoca tanto la quietud de la naturaleza como su insondable misterio.", 
        type: "Muro",
        government: "Salvaje",
        population: "Criaturas de bosque y río",
        defenses: "Criaturas al servicio de Strahd",
        commerce: "Comerciantes Vistani y de las distintas poblaciones de las tierras de Barovia",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "La Villa de Barovia", 
        world_id: 2, 
        description: "La villa de Barovia es el lugar más triste en estas tierras, sus residentes tan temerosos de Strahd que rara vez se aventuran fuera de sus hogares. La villa se halla a la sombra del Castillo Ravenloft, enterrada en la niebla, pero sin embargo todavía incapaz de esconderse de la vista del vampiro.", 
        type: "Villa", 
        government: "El Burgomaeste", 
        population: "300 humanos apóximadamente, más de la mitad son niños, y pocos llegan a la vejez.", 
        defenses: "No hay defensas especializadas en la Villa dado que la sombra de Strahd siempre vigila esta población.", 
        commerce: "Lo único parecido a un comercio en la Villa es una taberna en la plaza Mayor.", 
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Cruce del Río Ivlis", 
        world_id: 2, 
        description: "En este punto, el camino desgastado por el tiempo se bifurca, y un letrero, frente al cadalso, señala tres direcciones: al este, la Villa de Barovia; al noroeste, el estanque Tser; y al suroeste, Ravenloft y Vallaki. El sendero hacia el noroeste se inclina hacia abajo y se pierde entre los árboles, mientras que el del suroeste asciende con una pendiente pronunciada. Justo enfrente del cadalso, un muro bajo y en ruinas, roto en algunos tramos, rodea parcialmente un pequeño cementerio, cuyas tumbas están envueltas en una niebla densa y persistente, como si intentaran ocultar sus secretos a ojos indiscretos.", 
        type: "Cruce de caminos", 
        government: "Criaturas de bosque", 
        population: "Criaturas de bosque", 
        defenses: "Criaturas de bosque", 
        commerce: "Comerciantes Vistani y de las distintas poblaciones de las tierras de Barovia",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Campamento del Estanque Tser", 
        world_id: 2, 
        description: "El camino se desvanece poco a poco, transformándose en un sendero retorcido y embarrado que serpentea entre los árboles. Profundas rodadas en la tierra son testigos mudos de los constantes viajes de carretas. De repente, el dosel de ramas y niebla se abre, revelando un cielo cargado de nubes negras que se agitan como un mar embravecido. Frente a vosotros se extiende un claro junto a un río, que se ensancha para formar un pequeño lago de cientos de pies de ancho. Cinco coloridas tiendas redondas, cada una de unas diez pies de diámetro, están dispuestas alrededor de un anillo de carromatos de techos abovedados. Más cerca de la orilla, una tienda mucho más grande, algo inclinada por el peso del tiempo, emite una cálida luz desde su interior. Cerca de ella, ocho caballos sin bridas se inclinan, tranquilos, para beber del río. El aire se llena con las melancólicas notas de un acordeón, chocando y mezclándose con las voces alegres de varias figuras vestidas con ropas vibrantes que cantan alrededor de una hoguera. Desde el campamento, un estrecho sendero sigue su curso hacia el norte, serpenteando entre el río y el borde sombrío del bosque.", 
        type: "Asentamiento Vistani", 
        government: "Matriarcado", 
        population: "12 Vistani en edad adulta y 8 Caballos de tiro", 
        defenses: "Aunque los Vistani de este campamento están aliados con Strahd, solo atacarán si son provocados con amenazas o insultos. De lo contrario, ofrecerán frascos de vino e invitarán a unise descansar.", 
        commerce: "Hasta 4.500 po para comprar y un objeto de la tabla B de la DMG",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Cascadas Tser", 
        world_id: 2, 
        description: "Seguís el camino de tierra que serpentea, aferrándose con precaria tenacidad al flanco de la montaña, hasta que termina ante un puente arqueado de piedra oscurecida por siglos de moho. Este estructura, cubierta de cicatrices del tiempo, se alza sobre un abismo profundo, donde el eco del agua y el viento parecen susurrar secretos olvidados. En las esquinas del puente, gárgolas envueltas en un manto de musgo negro os observan, sus rostros endurecidos y corroídos por los elementos, como si alguna emoción perdida se hubiera petrificado en ellas. Desde el lado montañoso, una cascada cae en un rugido estruendoso, desvaneciéndose en la bruma antes de alcanzar una piscina escondida en la profundidad, a casi mil pies por debajo. Desde allí, un río nace, zigzagueando entre los pinos ahogados en niebla, perdiéndose en la inmensidad del valle, donde la luz apenas se atreve a entrar.", 
        type: "Laguna salvaje", 
        government: "Criaturas de bosque y río", 
        population: "Criaturas de bosque y río", 
        defenses: "Criaturas de bosque y río", 
        commerce: "Algún cazador ocasional.",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Carruaje Negro", 
        world_id: 2, 
        description: "Detenida en el camino, apuntando hacia el este, se encuentra una gran carroza negra tirada por dos caballos del mismo color. Los animales resoplan, exhalando nubes de vapor que se disuelven en el aire helado de la montaña. De repente, la puerta lateral de la carroza se abre, deslizándose en un movimiento tan silencioso que parece casi antinatural.", 
        type: "Carruaje", 
        government: "NSC", 
        population: "2 caballos de tiro negros", 
        defenses: "Las paredes del carruaje ofrecen privacidad total y parecen bien robustas.", 
        commerce: "Ninguno",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Puertas de Ravenloft", 
        world_id: 2, 
        description: "Tras serpentear entre el bosque y los picos escarpados de la montaña, el camino gira bruscamente hacia el este, y ante vosotros se alza la imponente y sobrecogedora presencia del castillo Ravenloft. La carroza se detiene de golpe frente a dos torres de piedra gemelas, sus cúspides rotas y desgastadas tras años de abandono y exposición a los elementos. Más allá de estas torres, un precipicio de cincuenta pies de ancho, lleno de niebla, se sumerge en profundidades desconocidas. Un puente levadizo, bajado y formado por vigas de madera vieja y reforzada, se extiende precariamente sobre el abismo, conectando vuestra posición con el arco de entrada al patio. Las cadenas del puente rechinan al viento, el hierro corroído por el óxido parece protestar bajo su propio peso. Desde lo alto de los muros, gárgolas de piedra os observan con ojos vacíos, sus rostros deformados por sonrisas macabras que parecen burlarse. Sobre el túnel de entrada, un portón de madera podrida, cubierto de musgo y verdín, cuelga ominosamente. Más allá, las puertas principales de Ravenloft están abiertas de par en par. Desde su interior emana una cálida y rica luz que inunda el patio, creando un contraste inquietante con la penumbra circundante. Antorchas parpadean tristemente en las abrazaderas a ambos lados de las puertas abiertas, sus llamas luchando contra el viento como si compartieran su melancolía.",
        type: "Fortaleza", 
        government: "Condado", 
        population: "Siervos de Strahd", 
        defenses: "Siervos de Strahd", 
        commerce: "Ninguno",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Castillo de Ravenloft", 
        world_id: 2, 
        description: "",
        type: "Castillo", 
        government: "Condado", 
        population: "Siervos de Strahd", 
        defenses: "Siervos de Strahd", 
        commerce: "Siervos de Strahd",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Lago Zarovich", 
        world_id: 2, 
        description: "Al pie de una montaña, enclavado en un bosque neblinoso, hay un gran lago. El agua está completamente quieta y oscura, reflejando las nubes negras que hay en lo alto como un espejo monstruoso.",
        type: "Lago", 
        government: "Criaturas de bosque, montaña y río", 
        population: "Criaturas de bosque, montaña y río", 
        defenses: "Criaturas de bosque, montaña y río", 
        commerce: "Algún pescador ocasional de Vallaki",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Base del monte Baratok", 
        world_id: 2, 
        description: "Al norte del lago de montaña, los árboles comienzan a ascender de forma constante por las laderas del monte Baratok, cuya presencia monolítica resulta opresiva a esta distancia. El terreno aquí es rocoso, irregular y agotador de recorrer.",
        type: "Montaña, Bosque y Río", 
        government: "Criaturas de bosque, montaña y río", 
        population: "Criaturas de bosque, montaña y río", 
        defenses: "Criaturas de bosque, montaña y río", 
        commerce: "Mordekainen puede aparecer por aquí",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Mansión del Mago Loco", 
        world_id: 2, 
        description: "Si los personajes rescatan al archimago de su locura, este los invita a su “mansión”. Los conduce a la montaña hasta una puerta invisible que sirve como entrada a su guarida extradimensional, creada mediante el magnífico hechizo de mansión de Mordenkainen.",
        type: "Mansión mágica", 
        government: "NSNC", 
        population: "Mordekainen y sus invitados", 
        defenses: "Mordekainen", 
        commerce: "Ninguno",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Ciudad de Vallaki", 
        world_id: 2, 
        description: "",
        type: "", 
        government: "", 
        population: "", 
        defenses: "", 
        commerce: "",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Viejo Muelehuesos", 
        world_id: 2, 
        description: "",
        type: "", 
        government: "", 
        population: "", 
        defenses: "", 
        commerce: "",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Cruce del Río Luna", 
        world_id: 2, 
        description: "",
        type: "", 
        government: "", 
        population: "", 
        defenses: "", 
        commerce: "",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Argynvostholt", 
        world_id: 2, 
        description: "",
        type: "", 
        government: "", 
        population: "", 
        defenses: "", 
        commerce: "",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Cruce del Río Cuervo", 
        world_id: 2, 
        description: "",
        type: "", 
        government: "", 
        population: "", 
        defenses: "", 
        commerce: "",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Asentamiento de Krezk", 
        world_id: 2, 
        description: "",
        type: "", 
        government: "", 
        population: "", 
        defenses: "", 
        commerce: "",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Paso de Tsolenka", 
        world_id: 2, 
        description: "",
        type: "", 
        government: "", 
        population: "", 
        defenses: "", 
        commerce: "",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Ruinas de Berez", 
        world_id: 2, 
        description: "",
        type: "", 
        government: "", 
        population: "", 
        defenses: "", 
        commerce: "",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Torre de Van Richten", 
        world_id: 2, 
        description: "",
        type: "", 
        government: "", 
        population: "", 
        defenses: "", 
        commerce: "",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Los Magos de las Viñas", 
        world_id: 2, 
        description: "",
        type: "", 
        government: "", 
        population: "", 
        defenses: "", 
        commerce: "",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Templo de Ámbar", 
        world_id: 2, 
        description: "",
        type: "", 
        government: "", 
        population: "", 
        defenses: "", 
        commerce: "",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Colina de Yester", 
        world_id: 2, 
        description: "",
        type: "", 
        government: "", 
        population: "", 
        defenses: "", 
        commerce: "",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Guarida de los Licántropos", 
        world_id: 2, 
        description: "",
        type: "", 
        government: "", 
        population: "", 
        defenses: "", 
        commerce: "",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      //RAVNICA
      {name: "Distrito 10", world_id: 3, description: "El décimo distrito es un lugar en expansión. Para ser gobernado eficazmente, se divide en seis recintos, cada uno del tamaño de una pequeña ciudad.", type: "??", government: "??", population: "??", defenses: "??", commerce: "??", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      //
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
