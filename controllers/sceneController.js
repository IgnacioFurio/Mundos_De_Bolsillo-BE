const { Scene, CharacterScene, Location } = require('../models');

const sceneController = {};

sceneController.createScene = async (req,res) => {
    try {
        const { title, description, location_id, game_id, characters_id } = req.body;

        if (title === "") {
            return res.status(428).json({
                succes: false,
                message: "Un nombre es necesario para una búsqueda más eficiente."
            });
        }

        const newScene = await Scene.create(
            {
                title: title,
                description: description,
                location_id: location_id,
                game_id: game_id,
            }
        );

        const sceneID = newScene.id

        const charactersInScene = characters_id.map((characterId) => {
            return { character_id: characterId, scene_id: sceneID }
        });
        await CharacterScene.bulkCreate(charactersInScene);

        return res.status(201).json(
            { 
                success: true,
                message: `La escena ${newScene.title} ha quedado registrada correctamente.`,
                data: newScene
            }
        );
    } catch (error) {
        return res.status(501).json(
            { 
                success: false,
                message: 'Algo ha impedido que creemos tu mundo, por favor vuelve a intentarlo.',
                error: error.message
            }
        );  
    }
};

sceneController.getAllScenesByGameId = async (req,res) => {
    try {
        const { game_id } = req.body;
        
        const allScenes = await Scene.findAll(
            {
                where: {id: game_id},
                include: [
                    {
                        model: Location,
                        as: "location"
                    }
                ]
            }
        );
        
        if (allScenes.lenght === 0) {
            return res.status(404).json(
                { 
                    success: false,
                    message: 'Todo el poder de un dios y aún no has creado nigún mundo, ya te vale.',
                }
            );
        }

        return res.status(201).json(
            { 
                success: true,
                message: 'Aquí tienes todas las escenas creadas para la partida.',
                data: allScenes
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

// sceneController.updateWorld = async (req,res) => {
//     try {
//         const { id, name, description } = req.body

//         if (id === "") {
//             return res.status(409).json(
//                 { 
//                     success: false,
//                     message: 'Nuestros archivos no muestran registros de tal mundo.',
//                 }
//             ); 
//         };
        
//         if (name === "") {
//             return res.status(409).json(
//                 { 
//                     success: false,
//                     message: 'Un mundo sin nombre es como un verano sin helados.',
//                 }
//             ); 
//         };

//         const updateWorld = await World.update(
//             {
//                 name: name,
//                 description: description
//             },
//             {
//                 where: {id: id}
//             }
//         );

//         return res.status(200).json(
//             {
//                 success: true,
//                 message: `Vamos a dejar la nueva información actualizada de ${name} en su estante.`,
//                 data: updateWorld
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

// sceneController.deleteWorld = async (req,res) => {
//     try {
//         const { world_id } = req.body

//         const findWorld = await World.findByPk(world_id);

//         if (!findWorld) {
//             return res.status(404).json(
//                 { 
//                     success: false,
//                     message: '¡Vaya!, no hay registros de tal mundo en nuestras estanterías.',
//                 }
//             ); 
//         }

//         const deleteWorld = await World.destroy({
//             where: {
//                 id: world_id
//             }
//         });

//         return res.status(200).json(
//             {
//                 success: true,
//                 message: `Gracias por usar nuestro rayo destructor, ahora vamos a destruir toda prueba acerca de la existencia de cierto mundo.`,
//                 data: deleteWorld
//             }
//         );  

//     } catch (error) {
//         return res.status(501).json(
//             { 
//                 success: false,
//                 message: 'Un ente malvado esta evitando que nos deshagamos de tu partida.',
//                 error: error.message
//             }
//         ); 
//     }
// };

module.exports = sceneController