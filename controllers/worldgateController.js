const { WorldGate } = require('../models');

const worldgateController = {};

worldgateController.createWorldGate = async (req,res) => {
    try {
        const { game_id, world_id } = req.body;

        if (!/^\d+$/.test(game_id)) {
            return res.status(428).json({
                succes: false,
                message: "Antes de seguir sería conveniente decidir en que partida necesitas abrir una puerta de acceso."
            });
        }else if (!/^\d+$/.test(world_id)) {
            return res.status(428).json({
                succes: false,
                message: "¿No estabas aquí para asignar algún mundo a la partida?"
            });
        }

        const newWorldGate = await WorldGate.create(
            {
                game_id: game_id,
                world_id: world_id
            }
        );

        return res.status(201).json(
            { 
                success: true,
                message: `Puerta de acceso al mundo establecida, ahora ya puedes acceder a los datos de este.`,
                data: newWorldGate
            }
        );
    } catch (error) {
        return res.status(501).json(
            { 
                success: false,
                message: 'No logramos establecer una conexión estable con el mundo que buscas, porfavor sigue intentándolo más tarde.',
                error: error.message
            }
        );  
    }
};

module.exports = worldgateController;
