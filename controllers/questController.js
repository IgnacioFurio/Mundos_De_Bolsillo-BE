const { Quest, Character, Location, Characterquest } = require('../models');

const questController = {};

questController.createQuest = async (req,res) => {
    try {
        const { name, goal, status, delievered_by_character_id, got_in_location_id, happens_in_location_id } = req.body;

        if (name === "") {
            return res.status(428).json({
                succes: false,
                message: "Necesitaremos que le des un nombre a la misión para continuar."
            });
        }

        const newQuest = await Quest.create(
            {
                name: name,
                goal: goal,
                status: status,
                delievered_by_character_id: delievered_by_character_id, 
                got_in_location_id: got_in_location_id, 
                happens_in_location_id: happens_in_location_id
            }
        );

        return res.status(201).json(
            { 
                success: true,
                message: `Nueva misión añadida: ${newQuest.name}.`,
                data: newQuest
            }
        );
    } catch (error) {
        return res.status(501).json(
            { 
                success: false,
                message: 'Parece que tus enemigos no quieren que crees a más personajes.',
                error: error.message
            }
        );  
    }
};

questController.getQuestByCharacterId = async (req,res) => {
    try {
        const { character_id } = req.body;
                
        let getQuestByCharacterId = await Characterquest.findAll({ 
            where: { character_id: character_id },
            include: [
                {
                    model: Quest,
                    as: "quest",
                },
            ]
        });

        
        return res.status(201).json(
            { 
                success: true,
                message: 'Aquí están las misiones.',
                data: getQuestByCharacterId
            }
        );
    } catch (error) {
        return res.status(501).json(
            { 
                success: false,
                message: 'Algún mago ha saboteado tú búsqueda, estamos trabajando en solucionarlo.',
                error: error.message
            }
        );  
    }
};

// questController.updateCharacter = async (req,res) => {
//     try {
//         const { id, name, description, world_id, from_location_id, last_location_known_id } = req.body

//         if (id === "") {
//             return res.status(409).json(
//                 { 
//                     success: false,
//                     message: 'No hemos sido capaces de encontrar al personaje que buscas, pero seguiremos mirando en nuestras estanterías.',
//                 }
//             ); 
//         };
        
//         if (name === "") {
//             return res.status(409).json(
//                 { 
//                     success: false,
//                     message: '¿No has nombrado al personaje?, lo sentimos, pero no podemos permitirlo.',
//                 }
//             ); 
//         };

//         const updateCharacter = await Character.update(
//             {
//                 name: name,
//                 description: description,
//                 world_id: world_id,
//                 from_location_id: from_location_id,
//                 last_location_known_id: last_location_known_id
//             },
//             {
//                 where: {id: id}
//             }
//         );

//         return res.status(200).json(
//             {
//                 success: true,
//                 message: 'Estamos procediendo a guardar tu nueva información.',
//                 data: updateCharacter
//             }
//         );  

//     } catch (error) {
//         return res.status(501).json(
//             { 
//                 success: false,
//                 message: `Algo esta impidiendo que podamos cambiar la información de ${updateCharacter.name}.`,
//                 error: error.message
//             }
//         ); 
//     }
// };

// questController.deleteCharacter = async (req,res) => {
//     try {
//         const { character_id } = req.body

//         const findCharacter = await Character.findByPk(character_id);

//         if (!findCharacter) {
//             return res.status(404).json(
//                 { 
//                     success: false,
//                     message: 'No hemos encontrado registros de tal personaje.',
//                 }
//             ); 
//         }

//         const deleteCharacter = await Character.destroy({
//             where: {
//                 id: character_id
//             }
//         });

//         return res.status(200).json(
//             {
//                 success: true,
//                 message: `Nos hemos desecho de ${findCharacter.name}, ahora mantendremos el secreto entre nosotros.`,
//                 data: findCharacter
//             }
//         );  

//     } catch (error) {
//         return res.status(501).json(
//             { 
//                 success: false,
//                 message: 'Estamos teniendo problemas para localizar al personaje.',
//                 error: error.message
//             }
//         ); 
//     }
// };

module.exports = questController