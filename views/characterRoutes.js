const characterController = require('../controllers/characterController');

const router = require('express').Router();

router.post('/post', characterController.createCharacter)
router.post('/get', characterController.getCharacterByWorldId)
// router.put('/put', gameController.updateGame)
router.delete('/delete', characterController.deleteCharacter)

module.exports = router;