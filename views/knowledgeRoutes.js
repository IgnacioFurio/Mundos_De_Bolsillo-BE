const knowledgeController = require('../controllers/knowledgeController');

const router = require('express').Router();

router.post('/post', knowledgeController.createKnowledge)
router.post('/get-by-character', knowledgeController.getKnowledgeByCharacterId)
// router.put('/put', knowledgeController.updateCharacter)
// router.delete('/delete', knowledgeController.deleteCharacter)

module.exports = router;