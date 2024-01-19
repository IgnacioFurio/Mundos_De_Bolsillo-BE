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
                message: 'Partida creada satisfactoriamente.',
                data: game
            }
        );
    } catch (error) {
        return res.status(501).json(
            { 
                success: false,
                message: 'Algo no ha salido según lo esperado.',
                error: error.message
            }
        );  
    }
};

module.exports = gameController;