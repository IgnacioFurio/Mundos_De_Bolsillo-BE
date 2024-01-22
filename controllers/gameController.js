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

        const newGame = await Game.create(
            {
                title: title,
                description: description
            }
        );

        return res.status(201).json(
            { 
                success: true,
                message: `Ya puedes comenzar a crear nuevas historias en ${game.title}.`,
                data: newGame
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

gameController.getAllGames = async (req,res) => {
    try {
        const allGames = await Game.findAll();
        
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
                data: allGames
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

gameController.updateGame = async (req,res) => {
    try {
        const { id,title, description } = req.body

        if (id === "") {
            return res.status(409).json(
                { 
                    success: false,
                    message: 'No hemos sido capaces de encontrar la partida que buscas, pero seguiremos mirando en nuestras estanterías.',
                }
            ); 
        };
        
        if (title === "") {
            return res.status(409).json(
                { 
                    success: false,
                    message: '¿Como se te ocurre quitarle el nombre a la partida?, lo sentimos, pero no podemos permitirlo.',
                }
            ); 
        };

        const updateGame = await Game.update(
            {
                title: title,
                description: description
            },
            {
                where: {id: id}
            }
        );

        return res.status(200).json(
            {
                success: true,
                message: 'Estamos procediendo a guardar tu nueva información.',
                data: updateGame
            }
        );  

    } catch (error) {
        return res.status(501).json(
            { 
                success: false,
                message: 'Algo esta impidiendo que podamos cambiar los datos de la partida.',
                error: error.message
            }
        ); 
    }
};

gameController.deleteGame = async (req,res) => {
    try {
        const { game_id } = req.body

        const findGame = await Game.findByPk(game_id);

        if (!findGame) {
            return res.status(404).json(
                { 
                    success: false,
                    message: 'No hemos encontrado registros de tal partida.',
                }
            ); 
        }

        const deleteGame = await Game.destroy({
            where: {
                id: game_id
            }
        });

        return res.status(200).json(
            {
                success: true,
                message: 'Nos hemos desecho de todo rastro de tu partida, mantendremos el secreto.',
                data: deleteGame
            }
        );  

    } catch (error) {
        return res.status(501).json(
            { 
                success: false,
                message: 'Un ente malvado esta evitando que nos deshagamos de tu partida.',
                error: error.message
            }
        ); 
    }
};

module.exports = gameController;