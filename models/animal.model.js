const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const animalSchema = new Schema({
    name: {
        type: Text,
        isRequired: true
    },
    description: {
        type: Text,
        isMultiline: true,
        isRequired: true
    },
    weaponSkill: {
        type: Integer,
        isRequired: true
    },
    balisticSkill: {
        type: Integer,
        isRequired: true
    },
    strength: {
        type: Integer,
        isRequired: true
    },
    toughness: {
        type: Integer,
        isRequired: true
    },
    agility: {
        type: Integer,
        isRequired: true
    },
    intelligence: {
        type: Integer,
        isRequired: true
    },
    willPower: {
        type: Integer,
        isRequired: true
    },
    fellowship: {
        type: Integer,
        isRequired: true
    },
    actions: {
        type: Integer,
        isRequired: true
    },
    wounds: {
        type: Integer,
        isRequired: true
    },
    strengthBonus: {
        type: Integer,
        isRequired: true
    },
    toughnessBonus: {
        type: Integer,
        isRequired: true
    },
    movement: {
        type: Text,
        isRequired: true
    },
    magic: {
        type: Integer,
        isRequired: true
    },
    insanityPoints: {
        type: Integer,
        isRequired: true
    },
    fatePoints: {
        type: Integer,
        isRequired: true
    },
    skills: {
        type: Text,
        isMultiline: true,
        isRequired: true
    },
    talents: {
        type: Text,
        isMultiline: true,
        isRequired: true
    }
})

const Animal = mongoose.model('Animal', animalSchema)

module.exports = Animal