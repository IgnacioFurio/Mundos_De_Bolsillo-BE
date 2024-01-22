const gameController = require('../controllers/gameController');

const router = require('express').Router();

router.post('/post', gameController.createGame)
router.get('/getall', gameController.getAllGames)
router.put('/put', gameController.updateGame)
router.delete('/delete', gameController.deleteGame)

module.exports = router;