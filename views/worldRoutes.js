const worldController = require('../controllers/worldController');

const router = require('express').Router();

router.post('/post', worldController.createWorld)

module.exports = router;