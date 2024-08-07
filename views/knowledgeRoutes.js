const knowledgeController = require('../controllers/knowledgeController');

const router = require('express').Router();

router.post('/post', knowledgeController.createKnowledge)
router.post('/get-by-character', knowledgeController.getKnowledgeByCharacterId)
router.put('/put', knowledgeController.updateKnowledge)
router.delete('/delete', knowledgeController.deleteKnowledge)

module.exports = router;