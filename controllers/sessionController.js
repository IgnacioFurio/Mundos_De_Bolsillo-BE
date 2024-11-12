const { where } = require('sequelize');
const { Session } = require('../models');

const sessionController = {};

sessionController.createSession = async (req,res) => {
    try {
        const { title, description, game_id } = req.body;

        if (title === "") {
            return res.status(428).json({
                succes: false,
                message: "Un nombre es necesario para una búsqueda más eficiente."
            });
        }

        const newSession = await Session.create(
            {
                title: title,
                description: description,
                game_id: game_id,
            }
        );

        return res.status(201).json(
            { 
                success: true,
                message: `La sesión ${newSession.title} ha quedado registrada correctamente.`,
                data: newSession
            }
        );
    } catch (error) {
        return res.status(501).json(
            { 
                success: false,
                message: 'Algo ha impedido que creemos tu sesión, por favor vuelve a intentarlo.',
                error: error.message
            }
        );  
    }
};

// sessionController.getAllSessionsByGameId = async (req,res) => {
//     try {
//         const { game_id } = req.body;
        
//         const allScenes = await Scene.findAll(
//             {
//                 where: {game_id: game_id},
//                 include: [
//                     {
//                         model: Location,
//                         as: "location"
//                     },
//                     {
//                         model: CharacterScene,
//                         include: [
//                             {
//                                 model: Character,
//                                 as: "characterId"
//                             }
//                         ]
//                     },
//                 ]
//             }
//         );
        
//         if (allScenes.lenght === 0) {
//             return res.status(404).json(
//                 { 
//                     success: false,
//                     message: 'Hemos registrado todo el archivo y no hemos podido encontrar escenas.',
//                 }
//             );
//         }

//         return res.status(201).json(
//             { 
//                 success: true,
//                 message: 'Aquí tienes todas las escenas creadas para la partida.',
//                 data: allScenes
//             }
//         );
//     } catch (error) {
//         return res.status(501).json(
//             { 
//                 success: false,
//                 message: 'Algún mago ha saboteado tú búsqueda, estamos trabajando en solucionarlo.',
//                 error: error.message
//             }
//         );  
//     }
// };

// sessionController.updateSession = async (req,res) => {
//     try {
//         const { id, title, description, location_id, game_id, characters_id } = req.body

//         if (id === "") {
//             return res.status(409).json(
//                 { 
//                     success: false,
//                     message: 'Nuestros archivos no muestran registros de tal escena.',
//                 }
//             ); 
//         };

//         const updateScene = await Scene.update(
//             {
//                 title: title,
//                 description: description,
//                 location_id: location_id,
//                 game_id: game_id
//             },
//             {
//                 where: {id: id}
//             }
//         );

//         const deleteCharacterScene = await CharacterScene.destroy(
//             {where: {scene_id: id}}
//         );      
        
//         const charactersInScene = characters_id.map((characterId) => {
//             return { character_id: characterId, scene_id: id }
//         });
//         await CharacterScene.bulkCreate(charactersInScene)

//         return res.status(200).json(
//             {
//                 success: true,
//                 message: `Vamos a dejar la nueva información actualizada de ${title} en su estante.`,
//                 data: updateScene
//             }
//         );  

//     } catch (error) {
//         return res.status(501).json(
//             { 
//                 success: false,
//                 message: 'Hay alguna clase de protección que nos impide avanzar de momento.',
//                 error: error.message
//             }
//         ); 
//     }
// };

// sessionController.deleteSession = async (req,res) => {
//     try {
//         const { scene_id } = req.body

        
//         const deleteCharacterScene = await CharacterScene.destroy(
//             {where: {scene_id: scene_id}}
//         );
        
//         const deleteScene = await Scene.destroy(
//             {where: {id: scene_id}}
//         );     

//         if ( !deleteCharacterScene || !deleteScene) {
//             return res.status(404).json(
//                 {
//                     success: true,
//                     message: `La escena que buscas no está registrada.`,
//                 }
//             ); 
//         }

//         return res.status(200).json(
//             {
//                 success: true,
//                 message: `La escena "${deleteScene.title}" ha sido eliminada de todo registro.`,
//                 data: deleteScene
//             }
//         );  

//     } catch (error) {
//         return res.status(501).json(
//             { 
//                 success: false,
//                 message: 'Estamos teniendo problemas para acceder a la información de la escena.',
//                 error: error.message
//             }
//         ); 
//     }
// };

module.exports = sessionController