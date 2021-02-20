const router = require('express').Router();
let Npc = require('../../models/npc.model');

// Get all Npcs
router.route('/').get((req,res) => {
    Npc.find()
        .then((npcs) => res.json(npcs))
        .catch((err) => res.status(400).json('Error: ' + err));
})

//Get npc by id
router.route('/:id').get((req, res) => {
    Npc.findById(req.params.id)
        .then((npc) => res.json(npc))
        .catch((err) => res.status(400).json("Error: " + err))
})