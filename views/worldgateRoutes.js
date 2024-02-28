const worldgateController = require('../controllers/worldgateController');

const router = require('express').Router();

router.post('/post', worldgateController.createWorldGate)

module.exports = router;