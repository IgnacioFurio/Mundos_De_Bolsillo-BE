const router = require('express').Router();

const gameRoutes = require('./views/gameRoutes');
const worldRoutes = require('./views/worldRoutes')

router.use('/game', gameRoutes);
router.use('/world', worldRoutes)

module.exports = router;