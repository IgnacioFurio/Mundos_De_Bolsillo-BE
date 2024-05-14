const locationController = require('../controllers/locationController');

const router = require('express').Router();

router.post('/post', locationController.createLocation);
router.post('/getall', locationController.getLocationsByWorldId);
router.put('/put', locationController.updateLocation);

module.exports = router;