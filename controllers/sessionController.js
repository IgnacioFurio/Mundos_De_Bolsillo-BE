const { where } = require('sequelize');
const { Session, Scene, CharacterScene, Character, Location } = require('../models');

const sessionController = {};

sessionController.createSession = async (req,res) => {
    try {
        const { title, description, game_id, scenesAtSessionIds } = req.body;

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

        for (let i = 0; i < scenesAtSessionIds.length; i++) {
            
            const scenesAtSession = await Scene.update(
                { 
                    session_id: newSession.id,
                    session_index: i
                },
                {
                    where: {id: scenesAtSessionIds[i]}
                }
            );
        };



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

sessionController.getAllSessionsByGameId = async (req,res) => {
    try {
        const { game_id } = req.body;
        
        const allSessions = await Session.findAll(
            {
                where: {game_id: game_id},
                include: [
                    {
                        model: Scene,
                        include: [
                            {
                                model: CharacterScene,
                                include: [
                                    {
                                        model: Character,
                                        as:"characterId"
                                    },
                                ]
                            },
                            {
                                model: Location,
                                as: "location"
                            }
                        ]
                    }
                ],
            }
        );
        
        if (allSessions.lenght === 0) {
            return res.status(404).json(
                { 
                    success: false,
                    message: 'Hemos registrado todo el archivo y no hemos podido encontrar sesiones.',
                }
            );
        }

        return res.status(201).json(
            { 
                success: true,
                message: 'Aquí tienes todas las sesiones creadas para la partida.',
                data: allSessions
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

sessionController.updateSession = async (req,res) => {
    try {
        const { id, title, description, game_id, scenesAtSession } = req.body

        if (id === "") {
            return res.status(409).json(
                { 
                    success: false,
                    message: 'Nuestros archivos no muestran registros de tal sesión.',
                }
            ); 
        };

        
        const updateSession = await Session.update(
            {
                title: title,
                description: description,
                game_id: game_id
            },
            {
                where: {id: id}
            }
        );

        if ( scenesAtSession?.length === 0 ) {
            await Scene.update(
                { 
                    session_id: null,
                    session_index: null
                },
                {
                    where: {session_id: id}
                }
            );
            
        } else if( scenesAtSession?.length > 0) {            
            await Scene.update(
                { 
                    session_id: null,
                    session_index: null
                },
                {
                    where: {session_id: id}
                }
            );

            for (let i = 0; i < scenesAtSession.length; i++) {
                await Scene.update(
                    { 
                        session_id: id,
                        session_index: i
                    },
                    {
                        where: {id: scenesAtSession[i].id}
                    },
                );
            }; 
        };

        return res.status(200).json(
            {
                success: true,
                message: `Vamos a dejar la nueva información actualizada de ${title} en su estante.`,
                data: updateSession
            }
        );  

    } catch (error) {
        return res.status(501).json(
            { 
                success: false,
                message: 'Hay alguna clase de protección que nos impide avanzar de momento.',
                error: error.message
            }
        ); 
    }
};

sessionController.deleteSession = async (req,res) => {
    try {
        const { session_id } = req.body
        
        const scenesAtSession = await Scene.update(
            { 
                session_id: null,
                session_index: null
            },
            {
                where: {session_id: session_id}
            }
        );

        const deleteSession = await Session.destroy(
            {where: {id: session_id}}
        ); 
        

        if ( !deleteSession ) {
            return res.status(404).json(
                {
                    success: true,
                    message: `La sesión que buscas no está registrada.`,
                }
            ); 
        }

        return res.status(200).json(
            {
                success: true,
                message: `La sesión "${deleteSession.title}" ha sido eliminada de todo registro.`,
                data: deleteSession
            }
        );  

    } catch (error) {
        return res.status(501).json(
            { 
                success: false,
                message: 'Estamos teniendo problemas para acceder a la información de la escena.',
                error: error.message
            }
        ); 
    }
};

module.exports = sessionController