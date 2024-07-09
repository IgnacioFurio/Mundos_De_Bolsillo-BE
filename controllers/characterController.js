const { Character, World, Location } = require('../models');

const characterController = {};

characterController.createCharacter = async (req,res) => {
    try {
        const { name, world_id, from_location_id, last_location_known_id, description} = req.body;

        if (name === "") {
            return res.status(428).json({
                succes: false,
                message: "Necesitaremos al menos una forma de referirnos a este personaje."
            });
        }
        
        if (world_id === "") {
            return res.status(428).json({
                succes: false,
                message: "Es importante saber cúal es su procedencia, al menos su mundo de origen."
            });
        }

        const newCharacter = await Character.create(
            {
                name: name,
                world_id: world_id,
                from_location_id: from_location_id,
                last_location_known_id: last_location_known_id,
                description: description
            }
        );

        return res.status(201).json(
            { 
                success: true,
                message: `${newCharacter.name} forma parte de tu partida a partir de ahora.`,
                data: newCharacter
            }
        );
    } catch (error) {
        return res.status(501).json(
            { 
                success: false,
                message: 'Parece que tus enemigos no quieren que crees a más personajes.',
                error: error.message
            }
        );  
    }
};

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

characterController.updateCharacter = async (req,res) => {
    try {
        const { id, name, description, world_id, from_location_id, last_location_known_id } = req.body

        if (id === "") {
            return res.status(409).json(
                { 
                    success: false,
                    message: 'No hemos sido capaces de encontrar al personaje que buscas, pero seguiremos mirando en nuestras estanterías.',
                }
            ); 
        };
        
        if (name === "") {
            return res.status(409).json(
                { 
                    success: false,
                    message: '¿No has nombrado al personaje?, lo sentimos, pero no podemos permitirlo.',
                }
            ); 
        };

        const updateCharacter = await Character.update(
            {
                name: name,
                description: description,
                world_id: world_id,
                from_location_id: from_location_id,
                last_location_known_id: last_location_known_id
            },
            {
                where: {id: id}
            }
        );

        return res.status(200).json(
            {
                success: true,
                message: 'Estamos procediendo a guardar tu nueva información.',
                data: updateCharacter
            }
        );  

    } catch (error) {
        return res.status(501).json(
            { 
                success: false,
                message: `Algo esta impidiendo que podamos cambiar la información de ${updateCharacter.name}.`,
                error: error.message
            }
        ); 
    }
};

characterController.deleteCharacter = async (req,res) => {
    try {
        const { character_id } = req.body

        const findCharacter = await Character.findByPk(character_id);

        if (!findCharacter) {
            return res.status(404).json(
                { 
                    success: false,
                    message: 'No hemos encontrado registros de tal personaje.',
                }
            ); 
        }

        const deleteCharacter = await Character.destroy({
            where: {
                id: character_id
            }
        });

        return res.status(200).json(
            {
                success: true,
                message: `Nos hemos desecho de ${findCharacter.name}, ahora mantendremos el secreto entre nosotros.`,
                data: findCharacter
            }
        );  

    } catch (error) {
        return res.status(501).json(
            { 
                success: false,
                message: 'Estamos teniendo problemas para localizar al personaje.',
                error: error.message
            }
        ); 
    }
};

module.exports = characterController