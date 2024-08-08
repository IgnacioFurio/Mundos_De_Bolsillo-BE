const questController = require('../controllers/questController');

const router = require('express').Router();

router.post('/post', questController.createQuest)
// router.post('/get-by-character', questController.getQuestByCharacterId)
// router.put('/put', questController.updatequest)
// router.delete('/delete', questController.deletequest)

module.exports = router;