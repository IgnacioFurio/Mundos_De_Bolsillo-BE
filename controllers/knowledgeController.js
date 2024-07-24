const { Knowledge, Character, Location } = require('../models');

const knowledgeController = {};

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

module.exports = knowledgeController