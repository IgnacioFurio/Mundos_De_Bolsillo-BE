const router = require('express').Router();

const gameRoutes = require('./views/gameRoutes');
const worldRoutes = require('./views/worldRoutes')
const worldgateRoutes = require('./views/worldgateRoutes');

router.use('/game', gameRoutes);
router.use('/world', worldRoutes)
router.use('/worldgate', worldgateRoutes)

module.exports = router;