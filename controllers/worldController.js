const { World } = require('../models');

const worldController = {};

worldController.createWorld = async (req,res) => {
    try {
        const { name, description } = req.body;

        if (name === "") {
            return res.status(428).json({
                succes: false,
                message: "¿Un mundo sin nombre?, primera vez que lo veo."
            });
        }

        const newWorld = await World.create(
            {
                name: name,
                description: description
            }
        );

        return res.status(201).json(
            { 
                success: true,
                message: `Ya puedes comenzar a poblar ${newWorld.name} con personajes y lugares especiales.`,
                data: newWorld
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

worldController.getAllWorlds = async (req,res) => {
    try {
        const allWorlds = await World.findAll();
        
        if (allWorlds.lenght === 0) {
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
                message: '¿Que mundo quieres visitar?.',
                data: allWorlds
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

worldController.updateWorld = async (req,res) => {
    try {
        const { id, name, description } = req.body

        if (id === "") {
            return res.status(409).json(
                { 
                    success: false,
                    message: 'Nuestros archivos no muestran registros de tal mundo.',
                }
            ); 
        };
        
        if (name === "") {
            return res.status(409).json(
                { 
                    success: false,
                    message: 'Un mundo sin nombre es como un verano sin helados.',
                }
            ); 
        };

        const updateWorld = await World.update(
            {
                name: name,
                description: description
            },
            {
                where: {id: id}
            }
        );

        return res.status(200).json(
            {
                success: true,
                message: `Vamos a dejar la nueva información actualizada de ${name} en su estante.`,
                data: updateWorld
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

worldController.deleteWorld = async (req,res) => {
    try {
        const { world_id } = req.body

        const findWorld = await World.findByPk(world_id);

        if (!findWorld) {
            return res.status(404).json(
                { 
                    success: false,
                    message: '¡Vaya!, no hay registros de tal mundo en nuestras estanterías.',
                }
            ); 
        }

        const deleteWorld = await World.destroy({
            where: {
                id: world_id
            }
        });

        return res.status(200).json(
            {
                success: true,
                message: `Gracias por usar nuestro rayo destructor, ahora vamos a destruir toda prueba acerca de la existencia de cierto mundo.`,
                data: deleteWorld
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

module.exports = worldController