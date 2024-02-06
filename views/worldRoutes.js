const worldController = require('../controllers/worldController');

const router = require('express').Router();

router.post('/post', worldController.createWorld)
router.get('/getall', worldController.getAllWorlds)
router.put('/put', worldController.updateWorld)
router.delete('/delete', worldController.deleteWorld)

module.exports = router;