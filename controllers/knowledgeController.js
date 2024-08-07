const { Knowledge, Character, Location } = require('../models');

const knowledgeController = {};

knowledgeController.createKnowledge = async (req,res) => {
    try {
        const { title, description, about_character_id, heard_from_character_id, about_location_id, heard_on_location_id, veracity } = req.body;

        const knowledge = await Knowledge.create({
                title: title,
                description: description,
                about_character_id: about_character_id,
                heard_from_character_id: heard_from_character_id,
                about_location_id: about_location_id,
                heard_on_location_id: heard_on_location_id,
                veracity: veracity,
            });

        return res.status(201).json(
            { 
                success: true,
                message: `Añadida nueva pieza de conocimiento.`,
                data: knowledge  
            }
        );
    } catch (error) {
        return res.status(501).json(
            { 
                success: false,
                message: 'Algo ha fallado en el proceso de creación, vuelve a intentarlo más tarde',
                error: error.message
            }
        );  
    }
};

knowledgeController.getKnowledgeByCharacterId = async(req,res) => {
    try {
        const { about_character_id } = req.body;

        const allKnowledge = await Knowledge.findAll({
            where: { about_character_id: about_character_id },
            include: [
                {
                    model: Character,
                    as: "aboutCharacter",
                    attributes: {exclude: ["description", "world_id", "from_location_id", "last_location_known_id"] }
                },
                {
                    model: Character,
                    as: "heardFromCharacter",
                    attributes: {exclude: ["description", "world_id", "from_location_id", "last_location_known_id"] }
                },
                {
                    model: Location,
                    as: "aboutLocation",
                    attributes: {exclude: ["description", "world_id", "type", "government", "population", "defenses", "commerce"] }
                },
                {
                    model: Location,
                    as: "heardOnLocation",
                    attributes: {exclude: ["description", "world_id", "type", "government", "population", "defenses", "commerce"] }
                },
            ]
        });
        

        if (allKnowledge.lenght === 0) {
            return res.status(404).json(
                { 
                    success: false,
                    message: 'Estamos buscando minuciosamente pero no logramos encontrar el conocimiento que necesitas.',
                }
            );
        };

        allKnowledge.sort((a,b)=>{a - b});

        return res.status(201).json(
            { 
                success: true,
                message: `Aquí tienes toda la información que hemos encontrado.`,
                data: allKnowledge
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

knowledgeController.updateKnowledge = async (req,res) => {
    try {
        const { id, title, description, about_character_id, heard_from_character_id, about_location_id, heard_on_location_id, veracity } = req.body;

        if (!/^\d+$/.test(id)) {
            return res.status(428).json({
                succes: false,
                message: "Parece que el conocimiento que buscas que no está registrado."
            });
        };

        const updateKnowledge = await Knowledge.update(
            {
                title: title,
                description: description,
                about_character_id: about_character_id,
                heard_from_character_id: heard_from_character_id,
                about_location_id: about_location_id,
                heard_on_location_id: heard_on_location_id,
                veracity: veracity
            },
            {
                where: {id: id}
            }
        );

        return res.status(200).json(
            {
                success: true,
                message: `Conocimiento actualizado correctamente.`,
                data: updateKnowledge
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

knowledgeController.deleteKnowledge = async (req,res) => {
    try {
        const { id } = req.body

        if (id === "") {
            return res.status(428).json({
                succes: false,
                message: "No podemos eliminar ningún lugar sin tener alguna referencia."
            });
        };

        const findKnowledge = await Knowledge.findOne({
            where: {id: parseInt(id)}
        });

        if (!findKnowledge) {
            return res.status(404).json(
                { 
                    success: false,
                    message: 'No hemos encontrado registros de tal pieza de conocimiento.',
                }
            ); 
        }

        const deleteKnowlege = await Knowledge.destroy({
            where: {
                id: id
            }
        });

        return res.status(200).json(
            {
                success: true,
                message: 'Será como si nunca hubiera existido tal información.',
                data: deleteKnowlege
            }
        );  

    } catch (error) {
        return res.status(501).json(
            { 
                success: false,
                message: 'Un ente malvado esta evitando que nos deshagamos de la información.',
                error: error.message
            }
        ); 
    }
};

module.exports = knowledgeController