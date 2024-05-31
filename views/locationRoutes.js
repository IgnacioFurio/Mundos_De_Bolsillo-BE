const locationController = require('../controllers/locationController');

const router = require('express').Router();

router.post('/post', locationController.createLocation);
router.get('/getall', locationController.getAllLocations);
router.post('/get', locationController.getLocationsByWorldId);
router.put('/put', locationController.updateLocation);
router.delete('/delete', locationController.deleteLocation);

module.exports = router;