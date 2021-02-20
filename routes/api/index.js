const router = require('express').Router();
const monsterRoutes = require('./monsters')
const animalRoutes = require('./animals')
const npcRoutes = require('./npcs')

// Routes
router.use("/monsters", monsterRoutes);
router.use("/animals", animalRoutes);
router.use("/npcs", npcRoutes);

module.exports = router;