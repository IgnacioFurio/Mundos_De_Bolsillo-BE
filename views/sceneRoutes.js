const sceneController = require('../controllers/sceneController');

const router = require('express').Router();

router.post('/post', sceneController.createScene)
router.post('/get-all-by-game', sceneController.getAllScenesByGameId)
router.post('/get-non-visited-by-game', sceneController.getNonVisitedScenesByGameId)
router.put('/put', sceneController.updateScene)
router.delete('/delete', sceneController.deleteScene)

module.exports = router;