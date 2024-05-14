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

locationController.updateLocation = async (req,res) => {
    try {
        const { id, name, world_id, description, type, government, population, defenses, commerce  } = req.body;

        if (id === "") {
            return res.status(428).json({
                succes: false,
                message: "Necesitamos saber a que sitio quieres aplicarle modificaciones."
            });
        };
        
        if (name === "") {
            return res.status(428).json({
                succes: false,
                message: "Ya que cambias el nombre, al menos ponle uno nuevo."
            });
        };

        const updateLocation = await Location.update(
            {
                name: name,
                world_id: parseInt(world_id),
                description: description,
                type: type,
                government: government,
                population: population,
                defenses: defenses,
                commerce: commerce
            },
            {
                where: {id: parseInt(id)}
            }
        );


        return res.status(200).json(
            {
                success: true,
                message: `${name} ha sufrido una actualización.`,
                data: updateLocation
            }
        );  

    } catch (error) {
        return res.status(501).json(
            { 
                success: false,
                message: 'Algo no ha salido como se esperaba, deberías intentarlo de nuevo.',
                error: error.message
            }
        ); 
    }
};

locationController.deleteLocation = async (req,res) => {
    try {
        const { id } = req.body

        if (id === "") {
            return res.status(428).json({
                succes: false,
                message: "No podemos eliminar ningún lugar sin tener alguna referencia."
            });
        };

        const deleteLocation = await Location.destroy({
            where: {
                id: parseInt(id)
            }
        });

        if(!deleteLocation){
            return res.status(404).json(
                {
                    success: false,
                    message: `No encontramos tal sitio en nuestros registros.`,
                }
            );
        }

        return res.status(200).json(
            {
                success: true,
                message: `Hemos eliminado todo registro relacionado con tal lugar.`,
                data: deleteLocation
            }
        );  

    } catch (error) {
        return res.status(501).json(
            { 
                success: false,
                message: 'Algo esta evitando que podamos destruir el sitio que nos has pedido.',
                error: error.message
            }
        ); 
    }
};

module.exports = locationController;
