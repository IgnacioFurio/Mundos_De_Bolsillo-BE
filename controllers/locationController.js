const { Location } = require('../models');

const locationController = {};

locationController.createLocation = async (req,res) => {
    try {
        const { name, description,  } = req.body;

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

locationController.getLocationsByWorldId = async (req,res) => {
    try {
        const { world_id } = req.body;

        let locationByWorldId = [];

        for (let i = 0; i < world_id.length; i++) {            
            let location = await Location.findAll({ 
                where: { world_id: world_id[i] },
            });

            locationByWorldId.push(location);
        };

        locationByWorldId.sort();
        
        return res.status(201).json(
            { 
                success: true,
                message: 'Aquí están las Localizaciones que podéis visitar en la partida.',
                data: locationByWorldId
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

module.exports = locationController;
