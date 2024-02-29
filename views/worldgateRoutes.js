const worldgateController = require('../controllers/worldgateController');

const router = require('express').Router();

router.post('/post', worldgateController.createWorldGate)
router.get('/get-by-game', worldgateController.getWorldGateByGameId)

module.exports = router;