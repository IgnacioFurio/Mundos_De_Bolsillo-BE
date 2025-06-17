const knowledgeController = require('../controllers/knowledgeController');

const router = require('express').Router();

router.post('/post', knowledgeController.createKnowledge)
router.post('/get-by-character', knowledgeController.getKnowledgeAboutCharacterId)
router.post('/get-by-location', knowledgeController.getKnowledgeAboutLocationId)
router.put('/put', knowledgeController.updateKnowledge)
router.delete('/delete', knowledgeController.deleteKnowledge)

module.exports = router;