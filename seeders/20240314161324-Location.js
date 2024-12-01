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
        description: "El viejo camino de Svalich serpentea hacia un valle custodiado por montañas oscuras y amenazantes, que se alzan al norte y al sur como centinelas sombríos. El bosque retrocede poco a poco, dejando al descubierto una aldea montañesa de aspecto lúgubre, rodeada por una empalizada de madera. Una espesa niebla se amontona contra las paredes de la barrera, como si buscara un resquicio para colarse, ansiando atrapar al pueblo desprevenido en su sueño. El camino de tierra culmina frente a un par de robustas puertas de hierro, tras las cuales se perfilan dos figuras envueltas en sombras. A ambos lados del sendero, clavadas en el suelo como grotescas advertencias, se alzan media docena de picas, cada una coronada con la cabeza cercenada de un lobo. La escena está cargada de un mensaje inconfundible: la entrada a este lugar no está destinada a los débiles ni a los desprevenidos.",
        type: "Ciudad pequeña", 
        government: "Baronía", 
        population: "500 humanos, la mayoría son jóvenes e infantes, poca gente llega a la vejez", 
        defenses: "24 guardias en total, 2 en cada puerta (6 en total), 6 en los barracones, y el resto descansando hasta que sea su turno.", 
        commerce: "El comercio local está bastante estancado, destaca la jugetería de Blinsky, el taller de Ataúdes y la posada Aguazul",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Viejo Muelehuesos", 
        world_id: 2, 
        description: "El viejo camino de Svalich deja atrás las sinuosas curvas de las montañas Balinok, transformándose en un sendero perezoso que se abraza al costado de la montaña mientras desciende hacia un valle envuelto en niebla. En el corazón de ese valle, podéis distinguir una ciudad amurallada cerca de las orillas de un gran lago montañoso, cuyas aguas oscuras permanecen inmóviles, como si ocultaran secretos profundos. Una bifurcación en el camino se extiende hacia el oeste, conduciendo a un promontorio donde se alza un molino de viento de piedra en ruinas, con sus aspas de madera deformadas y despojadas de toda utilidad. Al acercaros al molino, un hedor extraño y perturbador os golpea como una ola invisible. La brisa trae consigo un aroma acre y dulzón, como de harina rancia mezclada con algo profundamente errado: un toque de carne vieja y humedad estancada, que se infiltra en el aire frío del valle. Cuando os aproximáis aún más, el olor se intensifica. Ahora distinguís un matiz metálico, como el hierro oxidado, entremezclado con el denso tufo de grasa quemada. Algo más profundo se filtra desde las grietas de la puerta y las ventanas cubiertas de suciedad: un olor sutil pero inconfundible de hueso calcinado, que se adhiere a la garganta y al pensamiento. Es el tipo de aroma que no pertenece aquí, un eco de actos que nunca deberían haber ocurrido. El cuervo sobre la viga grazna de nuevo, esta vez con un tono más urgente, como si también percibiera lo que acecha dentro del molino. La puerta, desgastada y endeble, parece susurrar su propia advertencia, dejando escapar una corriente apenas perceptible de ese aire viciado que hace que cada respiración sea un desafío para vuestra valentía.",
        type: "Edificio desgastado", 
        government: "Comunidad", 
        population: "3 brujas, Morgantha y sus dos hijas, Bella y Offalia", 
        defenses: "3 brujas", 
        commerce: "Pastelitos de ensueño",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Cruce del Río Luna", 
        world_id: 2, 
        description: "El camino se encuentra con una encrucijada en forma de X, donde las ramas se extienden en direcciones opuestas, como brazos esqueléticos invitando al extravío. La mitad inferior de un poste de señales roto sobresale del suelo en un ángulo extraño, mientras que la parte superior yace en las malas hierbas cercanas, sus letras apenas visibles bajo una capa de musgo y suciedad. La niebla se agarra al suelo como un manto inquietante, envolviendo las sombras de los árboles cercanos, cuyas ramas desnudas se arquean hacia el camino. El silencio pesa, roto solo por un lejano crujido, mientras el aire parece vibrar con una sensación de amenaza no revelada.",
        type: "Camino", 
        government: "Salvaje", 
        population: "Criaturas de bosque", 
        defenses: "Salvaje", 
        commerce: "Algún Vistani ocasional",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Argynvostholt", 
        world_id: 2, 
        description: "Muy por encima del valle del río, un promontorio solitario se alza, coronado por una mansión sepulcral. Sus torretas, rematadas con conos de cuento de hadas, y sus muros adornados con almenas esculpidas parecen un eco de grandeza perdida. Parte de la estructura ha colapsado, dejando un techo roto y paredes desgarradas, mientras que una torre octagonal oscura domina la silueta, como un vigía que contempla la muerte misma. Un trueno distante ruge desde la niebla, seguido rápidamente por el aullido de lobos en el bosque bajo la ladera. Sin embargo, la casa permanece inmóvil y silenciosa, como los restos fosilizados de una criatura muerta hace mucho, aplastada contra la montaña por el peso del tiempo.",
        type: "Fortaleza", 
        government: "Comandancia", 
        population: "Espíritus y no-muertos", 
        defenses: "Antiguos guerreros de la orden de Argynvostholt", 
        commerce: "Favores y tratos",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Cruce del Río Cuervo", 
        world_id: 2, 
        description: "A lo largo del camino, veis un cartel desgastado por el tiempo, cuyas tres flechas apuntan a las tres bifurcaciones del sendero. La flecha que apunta al norte muestra la palabra Krezk, y entre los árboles podéis distinguir un puente de piedra arqueado que cruza un río oscuro. La flecha que apunta al este señala Vallaki, y el camino sube suavemente en esa dirección, como si invitara a perderse en las colinas lejanas. La flecha que apunta al suroeste muestra El Hechicero de los Vinos, y el camino desciende en esa dirección, ocultándose lentamente bajo una capa de niebla espesa.",
        type: "Cruce de caminos", 
        government: "Salvaje", 
        population: "Criaturas de Bosque y Río", 
        defenses: "Criaturas de Bosque y Río", 
        commerce: "Algún Vistani ocasional",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Asentamiento de Krezk", 
        world_id: 2, 
        description: "El pueblo envuelto en niebla no es más que un pequeño conjunto de humildes cabañas de madera, alineadas a lo largo de caminos de tierra que serpentean entre grupos de pinos cubiertos de nieve. Los árboles son tantos que dan la impresión de formar un bosque entero. Al noreste, los acantilados grises se elevan abruptamente, y desde aquí se puede ver con claridad el sinuoso camino que asciende hacia la abadía.",
        type: "Asentamiento pequeño", 
        government: "Baronía", 
        population: "Sobre 100 humanos viven en el pueblo y unos 50 `mestizos`", 
        defenses: "", 
        commerce: "",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Paso de Tsolenka", 
        world_id: 2, 
        description: "La cornisa rocosa por la que se aferra la carretera de montaña se angosta con cada paso, como si intentara arrastraros hacia el abismo. A vuestra izquierda, helados acantilados se alzan de forma abrupta hacia el cielo, donde oscuras nubes arremolinadas parecen devorar la luz. A vuestra derecha, el suelo se desvanece en un océano de brumas, tan profundo y denso que parece ocultar algo más que vacío. Frente a vosotros, a través del aullido del viento y los cuchillazos de la nieve, se alza un imponente muro de piedra negra, coronado por afiladas púas y grotescas estatuas de buitres demoníacos con cuernos retorcidos. En el centro del muro, un rastrillo de hierro cerrado parece desafiar vuestro avance, y más allá de él, una cortina de llamas verdes crepita de forma sobrenatural, iluminando la negrura con un resplandor antinatural. Al otro lado de esta barrera oscura, encaramada peligrosamente al borde de la montaña, se alza una torre de guardia de piedra blanca. Su forma destaca por su contraste con el muro sombrío, y en su cúspide descansan doradas estatuas de imponentes guerreros, como centinelas inmortales que observan en silencio vuestro progreso.",
        type: "Puente", 
        population: "Criaturas al servicio de Strahd", 
        defenses: "Zonas mágicas y Criaturas al servicio de Strahd", 
        government: "Salvaje", 
        commerce: "Tratos y Favores",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Ruinas de Berez", 
        world_id: 2, 
        description: "El sendero sigue al río durante varias millas, pero pronto la tierra firme da paso a un paisaje cada vez más inhóspito. Los prados desaparecen, reemplazados por cenagales donde el sendero se disuelve en un suelo esponjoso y traicionero, salpicado de altos juncos y pozas de agua estancada que emiten un hedor acre y rancio. Una espesa capa de niebla se cierne sobre el terreno, sofocando cualquier visibilidad y envolviendo todo en un silencio ominoso. Dispersas por la ciénaga, unas pocas cabañas de campesinos se alzan como sombras deformes. Sus muros están cubiertos de moho negro, y casi todos sus tejados se han derrumbado, dejando a estas decrépitas estructuras hundidas en el fango, como si hubieran aceptado su destino hace mucho tiempo. Las viviendas parecen agazaparse en la tierra, derrotadas por el peso de la humedad y el tiempo. Alrededor, enjambres de moscas negras zumban incesantemente, ávidas de sangre, su sonido un recordatorio de la decadencia que impregna el lugar. En la otra orilla del río, donde la niebla se disipa parcialmente, una luz solitaria parpadea en el centro de un círculo de menhires, su resplandor tenue y misterioso brillando como una esperanza distante o una advertencia velada.", 
        type: "Pueblo Abandonado", 
        population: "Baba Lysaga", 
        defenses: "Baba Lysaga", 
        gobernment: "Baba Lysaga",
        commerce: "Tratos y Favores",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Torre de Van Richten", 
        world_id: 2, 
        description: "Habéis llegado a un gélido lago de montaña, rodeado de bosques brumosos y acantilados escarpados que parecen vigilar el paisaje con su imponente presencia. Una densa capa de niebla se desliza lentamente sobre las oscuras y tranquilas aguas, engullendo todo con su abrazo silencioso. El sendero llega a su fin en una pasarela cubierta de hierba húmeda que se extiende unos cien metros sobre el lago, conduciendo a una isla pantanosa y plana. En el centro de la isla, una torre de piedra vieja y decrépita se alza como un vestigio olvidado. Sus muros están agrietados, y unos andamios medio derrumbados se aferran precariamente a uno de sus lados, marcados por una profunda fisura que ha desgarrado la estructura. Encima de los contrafuertes que sostienen los muros, unas desgastadas estatuas de grifos, cubiertas de musgo y con sus alas erosionadas por el tiempo, observan en silencio, como centinelas eternos de un pasado que se niega a desaparecer. La escena, envuelta en la penumbra de la niebla, parece congelada en el tiempo, cargada de un aura de abandono y misterio.",
        type: "Fortaleza", 
        government: "Khazûm", 
        population: "Khazûm y sus aliados", 
        defenses: "Trampas eléctricas en las entradas y 4 golems de arcilla en el interior", 
        commerce: "Intercambos de información",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "W. El Mago de las Viñas", 
        world_id: 2, 
        description: "El camino se transforma en un sendero fangoso que serpentea a través de los bosques. Bajo vuestros pies, el barro húmedo emite un chapoteo viscoso con cada paso, como si el suelo mismo intentara reteneros. A vuestro alrededor, el aire está cargado de un denso aroma a tierra mojada y hojas en descomposición, impregnado por un ligero toque metálico que os resulta inquietante. El silencio es pesado, roto solo por el crujido ocasional de ramas distantes y el murmullo del viento que juega entre las copas de los árboles. Gradualmente, el sendero desciende y los troncos de los árboles se abren, revelando un prado envuelto en una niebla tan espesa que el horizonte parece haber desaparecido por completo. Aquí, el aire se siente más frío y húmedo, y podéis percibir un leve hedor agrio, como si algo fermentara bajo la niebla. El camino se bifurca en dos ramales. El ramal del oeste desciende hacia el valle, donde el susurro del viento parece arrastrar murmullos lejanos, apenas perceptibles. El otro ramal se dirige hacia el sur, perdiéndose en un bosque aún más sombrío, desde el cual se escucha un lejano crujido, como el de ramas cediendo bajo el peso de algo que no podéis ver. En la intersección, un letrero de madera maltrecho se alza torcido, cubierto de musgo y con la madera hinchada por la humedad. Un aroma mohoso emana de él, y sus letras toscas apenas visibles anuncian: 'Viñedo'.",
        type: "Comercio", 
        government: "Davian Martikov", 
        population: "Davian y su familia.", 
        defenses: "Familia Martikov y los Guardianes de la Pluma", 
        commerce: "El mejor vino de Barovia",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "X. Templo de Ámbar", 
        world_id: 2, 
        description: "El camino se desvanece bajo un manto de nieve que cruje suavemente bajo vuestros pies, amortiguando el sonido de vuestros pasos y envolviendo el entorno en un inquietante silencio. El aire es gélido, cortando la piel como diminutas agujas, y el olor metálico de la nieve fresca se mezcla con un leve aroma pétreo, casi imperceptible, que emana de la montaña. Delante de vosotros, la ladera escarpada de la montaña se abre para revelar la majestuosa y ominosa fachada de un templo excavado en su roca desnuda. La estructura se alza cincuenta pies hacia el cielo, su presencia imponente y solemne. Seis alcobas flanquean el frente, cada una albergando una estatua de veinte pies de altura tallada en un único y translúcido bloque de ámbar. Las figuras encapuchadas carecen de rostro, lo que las hace aún más perturbadoras, y sus manos, unidas en un gesto de oración, parecen rogar a un poder indiferente o ausente. La luz, tenue y fría, se refleja en el ámbar, proyectando destellos que dan la ilusión de movimiento, como si algo se agitara en su interior. Entre las dos estatuas más profundas se abre una arcada de veinte pies de altura, su oscuridad desafiante y absoluta. Desde allí, una escalera desciende hacia las entrañas de la montaña, exhalando un aire frío y seco que lleva consigo un leve y desagradable aroma, a medio camino entre la piedra húmeda y algo que lleva siglos atrapado en las profundidades.",
        type: "Templo malvado", 
        government: "Liche Exethander", 
        population: "El Liche y sus siervos", 
        defenses: "El Liche y sus siervos", 
        commerce: "NSNC",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Y. Colina de Yester", 
        world_id: 2, 
        description: "El sendero a través de los espesos bosques os conduce a una colina cubierta con hierba marchita y mojones de piedra negros que emergen del suelo como lápidas olvidadas. El aire aquí es pesado, impregnado con un aroma terroso mezclado con un leve hedor a humedad y descomposición. Oscuras y siniestras nubes se congregan en lo alto, girando lentamente como un presagio de tormenta. Un único rayo de luz, como una lanza celestial, atraviesa la penumbra para golpear la cima de la colina, destacando su desnudez y desolación. Al oeste, más allá de la colina, la tierra, los bosques y el cielo desaparecen bajo el peso opresivo de un imponente muro de niebla que parece pulsar con una vida propia, como si estuviera observándoos.",
        type: "Bosque", 
        government: "Círculo Druídico", 
        population: "", 
        defenses: "", 
        commerce: "",
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        name: "Z. Guarida de los Licántropos", 
        world_id: 2, 
        description: "Por encima de la línea de árboles, excavada en la ladera de un espolón rocoso de la montaña, se encuentra una gran cueva iluminada por antorchas, que se asemeja a la boca abierta de un gran lobo. Las mandíbulas abiertas de la cabeza de lobo forman un dosel de piedra de quince pies de altura sobre la boca de la cueva, sostenida por pilares naturales de roca. El techo se eleva a una altura de veinte pies dentro de la cueva. Antorchas en soportes de hierro se alinean en las paredes. Desde algún lugar en el fondo, se oyen los ecos de una flauta. Algunas de las notas son dolorosamente discordantes.",
        type: "Guarida", 
        government: "Manada, líder Kiril Stoyanovich", 
        population: "20 licántropos", 
        defenses: "Manada de licántropos", 
        commerce: "Ninguno",
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
