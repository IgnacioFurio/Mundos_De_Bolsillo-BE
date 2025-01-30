const router = require('express').Router();

const gameRoutes = require('./views/gameRoutes');
const worldRoutes = require('./views/worldRoutes')
const worldgateRoutes = require('./views/worldgateRoutes');
const locationRoutes = require('./views/locationRoutes');
const characterRoutes = require('./views/characterRoutes');
const knowledgeRoutes = require('./views/knowledgeRoutes');
const questRoutes = require('./views/questRoutes');
const sceneRoutes = require('./views/sceneRoutes');
const sessionRoutes = require('./views/sessionRoutes');
const knowledgeCharacterRoutes = require('./views/knogledgeCharacterRoutes');

router.use('/game', gameRoutes);
router.use('/world', worldRoutes)
router.use('/worldgate', worldgateRoutes)
router.use('/location', locationRoutes)
router.use('/character', characterRoutes)
router.use('/knowledge', knowledgeRoutes)
router.use('/quest', questRoutes)
router.use('/scene', sceneRoutes)
router.use('/session', sessionRoutes)
router.use('/knowledge-characters', knowledgeCharacterRoutes)

module.exports = router;