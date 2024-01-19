const gameController = require('../controllers/gameController');

const router = require('express').Router();

router.post('/post', gameController.createGame)

module.exports = router;