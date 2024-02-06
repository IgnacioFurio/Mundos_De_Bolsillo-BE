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

module.exports = worldController