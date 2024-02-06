const worldController = require('../controllers/worldController');

const router = require('express').Router();

router.post('/post', worldController.createWorld)
router.get('/getall', worldController.getAllWorlds)
router.put('/put', worldController.updateWorld)

module.exports = router;