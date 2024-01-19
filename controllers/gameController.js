const { Game } = require('../models');

const gameController = {};

gameController.createGame = async (req,res) => {
    try {
        const { title, description} = req.body;

        if (title === "") {
            return res.status(428).json({
                succes: false,
                message: "¿Que clase de partida no tiene un nombre?"
            });
        }

        const game = await Game.create(
            {
                title: title,
                description: description
            }
        );

        return res.status(201).json(
            { 
                success: true,
                message: `Ya puedes comenzar a crear nuevas historias en ${game.title}.`,
                data: game
            }
        );
    } catch (error) {
        return res.status(501).json(
            { 
                success: false,
                message: 'Parece que tus enemigos no quieren que empieces una nueva partida.',
                error: error.message
            }
        );  
    }
};

gameController.getAllGames = async(req,res) => {
    try {
        const game = await Game.findAll();
        
        if (!game) {
            return res.status(404).json(
                { 
                    success: false,
                    message: 'Estamos buscando minuciosamente pero no logramos encontrar ninguna partida en la que juegues.',
                }
            );
        }

        return res.status(201).json(
            { 
                success: false,
                message: '¿A que jugaremos hoy?.',
                data: game
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

module.exports = gameController;