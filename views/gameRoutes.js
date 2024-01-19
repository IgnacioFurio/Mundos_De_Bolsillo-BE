const gameController = require('../controllers/gameController');

const router = require('express').Router();

router.post('/post', gameController.createGame)
router.get('/getall', gameController.getAllGames)

module.exports = router;