const { Location } = require('../models');

const locationController = {};

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
