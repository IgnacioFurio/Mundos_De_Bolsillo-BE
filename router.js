const router = require('express').Router();

const gameRoutes = require('./views/gameRoutes');

router.use('/game', gameRoutes);

module.exports = router;