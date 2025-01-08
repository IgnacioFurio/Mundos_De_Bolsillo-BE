const { KnowledgeCharacter, Character, World, Location, Knowledge } = require('../models');

const knowledgeCharacterController = {};

knowledgeCharacterController.createKnowledgeCharacter = async (req,res) => {
    try {
        const { knowledge_id, characters_id, session_id } = req.body;

        const deleteKnowledgeCharacters = await KnowledgeCharacter.destroy({
            where: { knowledge_id: knowledge_id}
        });

        const knowledgeCharacter = [];

        for (let i = 0; i < characters_id.length; i++) {
            knowledgeCharacter.push(await KnowledgeCharacter.create(
                {
                    knowledge_id: knowledge_id,
                    character_id: characters_id[i],
                    session_id: session_id
                }
            ));    
        }

        const newKnowledgeCharacter = {
                knowledge_id: knowledge_id,
                characters_id: characters_id,
                session_id: session_id
            };

        return res.status(201).json(
            { 
                success: true,
                message: `Hemos entregado la información a las personas pertinentes, gracias por tu confianza.`,
                data: knowledgeCharacter
            }
        );
    } catch (error) {
        return res.status(501).json(
            { 
                success: false,
                message: 'No nos está siendo posible registrar la información.',
                error: error.message
            }
        );  
    }
};

knowledgeCharacterController.getKnowledgeKnownByCharacterId = async(req,res) => {
    try {
        const { characters_id } = req.body;

        let knowledge = [];

        for (let i = 0; i < characters_id.length; i++) {
            knowledge.push(await KnowledgeCharacter.findAll({
                where: { character_id: characters_id[i] },
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                },
                include: [
                    {
                        model: Knowledge,
                        exclude: ["createdAt", "updatedAt"],
                        include: [
                            {
                                model: Character,
                                as: "aboutCharacter",
                                include: [
                                    {
                                        model: Location,
                                        as: "fromLocation",
                                        attributes: {
                                            exclude: ["createdAt", "updatedAt"]
                                        }
                                    },
                                    {
                                        model: Location,
                                        as: "lastLocationKnown",
                                        attributes: {
                                            exclude: ["createdAt", "updatedAt"]
                                        }
                                    },
                                    {
                                        model: World,
                                        attributes: {
                                            exclude: ["createdAt", "updatedAt"]
                                        }
                                    }
                                ],
                            },
                            {
                                model: Character,
                                as: "heardFromCharacter",
                                attributes: {
                                    exclude: ["createdAt", "updatedAt"]
                                },
                                include: [
                                    {
                                        model: Location,
                                        as: "fromLocation",
                                        attributes: {
                                            exclude: ["createdAt", "updatedAt"]
                                        }
                                    },
                                    {
                                        model: Location,
                                        as: "lastLocationKnown",
                                        attributes: {
                                            exclude: ["createdAt", "updatedAt"]
                                        }
                                    }
                                ],
                            },
                            {
                                model: Location,
                                as: "aboutLocation",
                                attributes: {
                                    exclude: ["createdAt", "updatedAt"]
                                }
                            },
                            {
                                model: Location,
                                as: "heardOnLocation",
                                attributes: {
                                    exclude: ["createdAt", "updatedAt"]
                                }
                            },
                        ],
                    },
                ]
            }));
        };

        knowledge.sort((a,b)=>{a.character_id - b.character_id});

        return res.status(201).json(
            { 
                success: true,
                message: `Aquí tienes toda la información que hemos encontrado.`,
                data: knowledge
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

// knowledgeCharacterController.updateCharacter = async (req,res) => {
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

// knowledgeCharacterController.deleteCharacter = async (req,res) => {
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

module.exports = knowledgeCharacterController