const sceneController = require('../controllers/sceneController');

const router = require('express').Router();

router.post('/post', sceneController.createScene)
router.post('/get-all-by-game', sceneController.getAllScenesByGameId)
// router.put('/put', sceneController.updateScene)
// router.delete('/delete', sceneController.deleteScene)

module.exports = router;