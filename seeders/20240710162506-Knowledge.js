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
      //Archibald
      {title: "Expulsado de la Orden de los Escribas", description: "Archibald fué expulsado por curiosear demasiado en aquellos conocimientos que quedaban fuera de su alcance.", veracity: true, about_character_id: 7, heard_from_character_id: null, about_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {title: "Un color peculiar", description: "Dicen que debido a sus actividades sexuales continuas Archibald tiene una mancha amarilla continuamente en sus calzones.", veracity: false, about_character_id: 7, heard_from_character_id: null, about_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {title: "Familia numerosa", description: "Archibal es el segundo de cinco hijos de una familia modesta.", veracity: true, about_character_id: 7, heard_from_character_id: null, about_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      //Beggend
      {title: "Voces en la cabeza", description: "Beggend parece tener conversaciones consigo mismo en voz alta, y lo que oye no parece bueno para el resto.", veracity: true, about_character_id: 8, heard_from_character_id: null, about_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {title: "Enfermo", description: "Dicen que debido a sus actividades sexuales continuas Archibald tiene una mancha amarilla continuamente en sus calzones.", veracity: false, about_character_id: 8, heard_from_character_id: null, about_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {title: "Hermana perdida", description: "Tras años negándose a creer que su hermana esta muerta, su mejor pista es una vendedora de joyas ambulante llamada Lucetta que repone sus mercancías en Waterdeep.", veracity: true, about_character_id: 8, heard_from_character_id: null, about_location_id: 4, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      //Cerneas
      {title: "Doppelganger", description: "Cerneas es en realidad un doppelganger.", veracity: true, about_character_id: 9, heard_from_character_id: null, about_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {title: "Druida", description: "Cerneas puede cambiar su forma a la de un animal.", veracity: true, about_character_id: 9, heard_from_character_id: null, about_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {title: "Abandonado por su padre", description: "El padre de Cerneas era un doppelganger que huyó al enterarse de que iba a ser padre.", veracity: true, about_character_id: 9, heard_from_character_id: null, about_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      //Dumah
      {title: "Experto flechero", description: "Dumah ha participado del negocio familiar desde que era pequeño, construyendo y probando personalmente la mayoría de los virotes de la tienda.", veracity: true, about_character_id: 10, heard_from_character_id: null, about_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {title: "Hombre lobo", description: "Las noches de luna llena Dumah pierde el control y se transforma en un lobo gigante devora hombres.", veracity: false, about_character_id: 10, heard_from_character_id: null, about_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {title: "Cazador Carmesí", description: "Dumah ha pasado varios años de su vida aprendiendo el arte de cazar monstruos canalizando al magia en su sangre.", veracity: true, about_character_id: 10, heard_from_character_id: null, about_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      //Rolen
      {title: "Una espada singular, Teuvel", description: "Eldar, el padre de Rolen le regaló su estoque cúando apenas tenía 10 años.", veracity: true, about_character_id: 11, heard_from_character_id: null, about_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {title: "Mascota infernal", description: "Los vecinos de la Rosa de los Vientos están seguros de que Akira los mira con una inteligencia inusual, muchos de ellos están convencidos de que es un demonio vigilándolos.", veracity: false, about_character_id: 11, heard_from_character_id: null, about_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {title: "Odio visceral", description: "Rolen se juró asi mismo dar caza al vampiro que acabó con la vida de su familia.", veracity: true, about_character_id: 11, heard_from_character_id: null, about_location_id: null, heard_on_location_id: null, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      //TORRE DE VAN RICHTEN
      {
        title: "El Dueño Original", 
        description: "Uno de los hombres que Strahd empleó para levantar el imponente Castillo Ravenloft fue un archimago conocido como Khazan. Tras completar su trabajo en aquella fortaleza cargada de oscuridad y tragedia, Khazan se retiró al sombrío valle de Barovia. Allí, apartado del mundo, erigió una torre solitaria en una pequeña isla en el lúgubre y brumoso Lago Baratok, donde los ecos de su poder parecían resonar eternamente en las aguas quietas.", 
        veracity: true, 
        about_character_id: null, 
        heard_from_character_id: null, 
        about_location_id: 31, 
        heard_on_location_id: null, 
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        title: "La Torre Eterna", 
        description: "La torre de Khazan permaneció vacía durante lo que parecieron ser siglos, un monumento silencioso al abandono. Se habría desplomado bajo el peso de su propio olvido si no fuera por los antiguos conjuros protectores que, como cadenas invisibles, la mantenían en pie, resistiendo al tiempo y a los elementos con una fuerza sobrenatural que solo podía provenir de una magia inquietante.", 
        veracity: true, 
        about_character_id: null, 
        heard_from_character_id: null, 
        about_location_id: 31, 
        heard_on_location_id: null, 
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        title: "Torre de Khazûm", 
        description: "Recientemente el paladín Khazûm se a asentado en la vieja torre de Khazan usandola como base y refugio cuándo los siervos de Strahd se acercan demasiado a su pista.", 
        veracity: true, 
        about_character_id: null, 
        heard_from_character_id: null, 
        about_location_id: 31, 
        heard_on_location_id: null, 
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        title: "Bastión Antimagia", 
        description: "Khazan protegió su torre con un poderoso conjuro diseñado para que solo él pudiera emplear magia en sus cercanías o en su interior. Este efecto, similar a un campo antimágico, envuelve la torre y se extiende cinco pies más allá de sus muros en todas direcciones. Sin embargo, los artefactos mágicos y las trampas creadas por el propio Khazan permanecen intactos bajo su influencia, incluyendo la trampa mortal en la puerta de la torre (área V2), los golems que vigilan en las áreas V4 y la inquietante armadura animada que patrulla la zona V7, todos guardianes de un legado tan impenetrable como ominoso.", 
        veracity: true, 
        about_character_id: null, 
        heard_from_character_id: null, 
        about_location_id: 31, 
        heard_on_location_id: null, 
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        title: "Puerta Relámpago", 
        description: "La puerta de la torre está sellada mágicamente y protegida por una trampa mortal. El símbolo grabado en su superficie es la clave para desactivar el peligro, pero cualquier magia que intente forzar la cerradura queda anulada por el efecto de drenaje mágico de la torre. Si una criatura osa tocar la puerta sin haber desactivado primero la trampa, un estallido de relámpagos envuelve la torre en un resplandor letal. Toda criatura que se encuentre fuera de la torre y a menos de 10 pies de ella debe superar una tirada de salvación de Destreza (CD 15). Si lleva armadura de metal, la tirada se realiza con desventaja. En caso de fallar, sufre 22 (4d10) puntos de daño por relámpago, o la mitad si tiene éxito. El relámpago persiste durante 10 minutos, castigando a cualquiera que entre en su radio por primera vez en un turno o comience su turno allí, infligiendo otros 22 (4d10) puntos de daño. La puerta no es solo una entrada, sino un desafío mortal que protege los secretos de Khazan.", 
        veracity: true, 
        about_character_id: null, 
        heard_from_character_id: null, 
        about_location_id: 31, 
        heard_on_location_id: null, 
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        title: "El Ritual de las figuras", 
        description: "La trampa de la puerta puede ser desactivada, pero solo por aquellos lo suficientemente astutos como para descifrar su enigma. Una criatura situada a menos de 5 pies de la puerta debe usar una acción para imitar la posición de los brazos de los ocho monigotes grabados en el símbolo, siguiendo la secuencia correcta. Las líneas del símbolo en la puerta revelan el orden preciso, pero un solo error podría resultar fatal. Si el ritual se ejecuta con éxito, la trampa se desactiva y la puerta, rechinando sobre sus oxidadas bisagras, se abre por un breve lapso de 10 minutos, ofreciendo un acceso fugaz al interior de la misteriosa torre.", 
        veracity: true, 
        about_character_id: null, 
        heard_from_character_id: null, 
        about_location_id: 31, 
        heard_on_location_id: null, 
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        title: "Guardianes de Arcilla", 
        description: "Cuatro estatuas de golems de arcilla se alzan inmóviles en la penumbra, custodios silenciosos de la torre. Su propósito principal es accionar el antiguo elevador, tirando de las cadenas con movimientos mecánicos y desprovistos de voluntad. Sin embargo, estas figuras no son meros autómatas: si son atacadas, despiertan con una furia implacable para defenderse. Bajo su apariencia inerte se oculta un poder destructivo, dispuesto a aplastar a cualquiera que amenace su cometido en este oscuro bastión de Khazan.", 
        veracity: true, 
        about_character_id: null, 
        heard_from_character_id: null, 
        about_location_id: 31, 
        heard_on_location_id: null, 
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        title: "Investigaciones de Van Richten", 
        description: "Van Richten pasó varios meses en esta habitación, rodeado de los vestigios de toda una vida dedicada a la investigación de Strahd von Zarovich. Estudió meticulosamente cada nota, cada detalle sobre el vampiro, y una vez que los secretos quedaron grabados en su memoria, los quemó en la vieja estufa, junto con sus diarios. Ezmerelda, desesperada por descubrir algo que la guiara hacia su mentor o desvelara sus planes, registró la habitación en busca de pistas. Entre los objetos que halló se encontraba un mapa enrollado de Barovia, y una página quemada de los diarios de Van Richten. Esta última, que revelaba fragmentos oscuros del pasado, fue cuidadosamente guardada en su carro, oculta de ojos curiosos. El rastro del cazador de vampiros aún permanecía, aunque desvanecido entre las cenizas.", 
        veracity: true, 
        about_character_id: null, 
        heard_from_character_id: null, 
        about_location_id: 31, 
        heard_on_location_id: null, 
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {
        title: "El Baúl de Van Richten", 
        description: "De la vieja caja de madera surge un aroma a lavanda, suave y extraño, que invita a abrirla. Al hacerlo, dentro yace la cabeza cortada de un Vistana humano llamado Yan. Su piel, de un tono ceroso, ha sido preservada mediante aceites mágicos, un recordatorio inquietante de su destino. Si se lanza un hablar con los muertos sobre su cabeza, lejos de la influencia de los efectos mágicos de la torre, Yan revela la oscura verdad de su final. Explica que fue desterrado de su clan por robar, y que un bardo semielfo llamado Rictavio le ofreció un paseo en su carreta de carnaval. Juntos viajaron durante varios días, pero la tensión entre ellos era palpable. Cuando Yan comprendió que Rictavio se dirigía a Barovia, intentó robar la carreta y el mono mascota de Rictavio, pero su intento fracasó. Rictavio lo superó, atravesándole la garganta con una espada, poniendo fin a su traición en un silencio mortal.",
        veracity: true, 
        about_character_id: null, 
        heard_from_character_id: null, 
        about_location_id: 31, 
        heard_on_location_id: null, 
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
