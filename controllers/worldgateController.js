const { WorldGate, World } = require('../models');

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

worldgateController.getWorldGateByGameId = async (req,res) => {
    try {
        const { game_id } = req.body

        const worldgatesByGame = await WorldGate.findAll({ 
            where: { game_id: game_id }, 
            attributes: { exclude: [ "id", "game_id", "world_id", "createdAt", "updatedAt"]},
            include: {
                model: World,
                attributes: { exclude: ["createdAt", "updatedAt"]}
            }
        });
        
        return res.status(201).json(
            { 
                success: true,
                message: 'Estos son los mundos a los que se pueden acceder en la partida.',
                data: worldgatesByGame
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

worldgateController.updateWorldGate = async (req,res) => {
    try {
        const { id, game_id, world_id } = req.body

        if (!/^\d+$/.test(game_id)) {
            return res.status(428).json({
                succes: false,
                message: "Para decirte si hay portales o no necesitaremos saber primero en que partida buscar."
            });
        }else if (!/^\d+$/.test(world_id)) {
            return res.status(428).json({
                succes: false,
                message: "¿No estabas aquí para asignar algún portal a la partida?"
            });
        }

        const updateWorldGate = await WorldGate.update(
            {
                game_id: game_id,
                world_id: world_id
            },
            {
                where: {id: id}
            }
        );

        return res.status(200).json(
            {
                success: true,
                message: `Portales reestructurados satisfactoriamente.`,
                data: updateWorldGate
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

worldgateController.deleteWorldGate = async (req,res) => {
    try {
        const { game_id, world_id } = req.body

        const deleteWorldGate = await WorldGate.destroy({
            where: {
                game_id: game_id,
                world_id: world_id
            }
        });

        if(!deleteWorldGate){
            return res.status(404).json(
                {
                    success: false,
                    message: `No encontramos el portal que buscas eliminar.`,
                }
            );
        }

        return res.status(200).json(
            {
                success: true,
                message: `Hemos cancelado el acceso al portal seleccionado.`,
                data: deleteWorldGate
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

module.exports = worldgateController;
