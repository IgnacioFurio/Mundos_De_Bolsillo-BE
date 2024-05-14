const { Location } = require('../models');

const locationController = {};

locationController.createLocation = async (req,res) => {
    try {
        const { name, world_id, description, type, government, population, defenses, commerce  } = req.body;

        if (name === "") {
            return res.status(428).json({
                succes: false,
                message: "Tendremos que llamar de alguna manera al nuevo sitio."
            });
        };

        if (world_id === "") {
            return res.status(428).json({
                succes: false,
                message: "Parece que se te ha olvidado informar del mundo dónde podemos encontrar este sitio."
            });
        }

        const newLocation = await Location.create(
            {
                name: name,
                world_id: parseInt(world_id),
                description: description,
                type: type,
                government: government,
                population: population,
                defenses: defenses,
                commerce: commerce
            }
        );

        return res.status(201).json(
            { 
                success: true,
                message: `${newLocation.name} puede recibir visitas ahora.`,
                data: newLocation
            }
        );
    } catch (error) {
        return res.status(501).json(
            { 
                success: false,
                message: 'Algo ha impedido que creemos esta localización, por favor vuelve a intentarlo.',
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
