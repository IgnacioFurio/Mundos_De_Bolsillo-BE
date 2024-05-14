const locationController = require('../controllers/locationController');

const router = require('express').Router();

router.post('/post', locationController.createLocation);
router.post('/getall', locationController.getLocationsByWorldId);

module.exports = router;