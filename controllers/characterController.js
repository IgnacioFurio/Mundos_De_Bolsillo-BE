const { Character, World, Location } = require('../models');

const characterController = {};

characterController.getCharacterByWorldId = async (req,res) => {
    try {
        const { world_id } = req.body;
        
        let characterByWorldId = [];
        
        for (let i = 0; i < world_id.length; i++) {    
            let character = await Character.findAll({ 
                where: { world_id: world_id[i] },
                include: [
                    {
                        model: World,
                        attributes: { exclude: ["id", "description", "createdAt", "updatedAt"]}
                    },
                    {
                        model: Location,
                        as: "fromLocation",
                    },
                    {
                        model: Location,
                        as: "lastLocationKnown",
                    },
                ]
            });

            characterByWorldId.push(character);
        };

        characterByWorldId.sort((a,b)=>{a - b});
        
        return res.status(201).json(
            { 
                success: true,
                message: 'Aquí están los personajes con los que interactuar en la partida.',
                data: characterByWorldId
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

module.exports = characterController