const router = require('express').Router();

const gameRoutes = require('./views/gameRoutes');
const worldRoutes = require('./views/worldRoutes')
const worldgateRoutes = require('./views/worldgateRoutes');
const locationRoutes = require('./views/locationRoutes');

router.use('/game', gameRoutes);
router.use('/world', worldRoutes)
router.use('/worldgate', worldgateRoutes)
router.use('/location', locationRoutes)

module.exports = router;