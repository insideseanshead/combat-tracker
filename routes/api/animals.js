const router = require('express').Router();
let Animal = require('../../models/animal.model');

// Get all monsters
router.route('/').get((req,res) => {
    Animal.find()
        .then((animals) => res.json(animals))
        .catch((err) => res.status(400).json("Error: " + err));
})

//Get monster by id
router.route('/:id').get((req, res) => {
    Animal.findById(req.params.id)
        .then((animal) => res.json(animal))
        .catch((err) => res.status(400).json("Error: " + err))
})