const router = require('express').Router();
let Monster = require('../../models/monster.model');

// Get all monsters
router.route('/').get((req,res) => {
    Monster.find()
        .then((monsters) => res.json(monsters))
        .catch((err) => res.status(400).json('Error: ' + err));
})

//Get monster by id
router.route('/:id').get((req, res) => {
    Monster.findById(req.params.id)
        .then((monster) => res.json(monster))
        .catch((err) => res.status(400).json("Error: " + err))
})

module.exports = router;