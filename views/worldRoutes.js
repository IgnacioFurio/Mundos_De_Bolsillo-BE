const worldController = require('../controllers/worldController');

const router = require('express').Router();

router.post('/post', worldController.createWorld)
router.get('/getall', worldController.getAllWorlds)

module.exports = router;