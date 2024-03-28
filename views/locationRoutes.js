const locationController = require('../controllers/locationController');

const router = require('express').Router();

router.post('/getall', locationController.getLocationsByWorldId);

module.exports = router;