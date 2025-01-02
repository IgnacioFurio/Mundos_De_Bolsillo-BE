const knowledgeCharacterController = require('../controllers/knowledgeCharacterController');

const router = require('express').Router();

router.post('/post', knowledgeCharacterController.createKnowledgeCharacter)
router.post('/get-by-character', knowledgeCharacterController.getKnowledgeKnownByCharacterId)
// router.put('/put', knowledgeCharacterController.updateKnowledge)
// router.delete('/delete', knowledgeCharacterController.deleteKnowledge)

module.exports = router;