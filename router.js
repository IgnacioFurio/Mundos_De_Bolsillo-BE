const router = require('express').Router();

const gameRoutes = require('./views/gameRoutes');
const worldRoutes = require('./views/worldRoutes')
const worldgateRoutes = require('./views/worldgateRoutes');
const locationRoutes = require('./views/locationRoutes');
const characterRoutes = require('./views/characterRoutes');
const knowledgeRoutes = require('./views/knowledgeRoutes');

router.use('/game', gameRoutes);
router.use('/world', worldRoutes)
router.use('/worldgate', worldgateRoutes)
router.use('/location', locationRoutes)
router.use('/character', characterRoutes)
router.use('/knowledge', knowledgeRoutes)

module.exports = router;