const characterController = require('../controllers/characterController');

const router = require('express').Router();

// router.post('/post', gameController.createGame)
router.post('/get', characterController.getCharacterByWorldId)
// router.put('/put', gameController.updateGame)
// router.delete('/delete', gameController.deleteGame)

module.exports = router;