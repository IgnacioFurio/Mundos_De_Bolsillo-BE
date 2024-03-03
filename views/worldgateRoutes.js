const worldgateController = require('../controllers/worldgateController');

const router = require('express').Router();

router.post('/post', worldgateController.createWorldGate)
router.get('/get-by-game', worldgateController.getWorldGateByGameId)
router.put('/put', worldgateController.updateWorldGate)
router.delete('/delete', worldgateController.deleteWorldGate)

module.exports = router;