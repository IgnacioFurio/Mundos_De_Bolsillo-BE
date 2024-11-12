const sessionController = require('../controllers/sessionController');

const router = require('express').Router();

router.post('/post', sessionController.createSession)
// router.post('/get-all-by-game', sessionController.getAllScenesByGameId)
// router.put('/put', sessionController.updateSession)
// router.delete('/delete', sessionController.deleteSession)

module.exports = router;