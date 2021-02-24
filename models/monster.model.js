const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const monsterSchema = new Schema({
    name: {
        type: String,
        isRequired: true
    },
    description: {
        type: String,
        isMultiline: true,
        isRequired: true
    },
    weaponSkill: {
        type: Number,
        isRequired: true
    },
    balisticSkill: {
        type: Number,
        isRequired: true
    },
    strength: {
        type: Number,
        isRequired: true
    },
    toughness: {
        type: Number,
        isRequired: true
    },
    agility: {
        type: Number,
        isRequired: true
    },
    intelligence: {
        type: Number,
        isRequired: true
    },
    willPower: {
        type: Number,
        isRequired: true
    },
    fellowship: {
        type: Number,
        isRequired: true
    },
    actions: {
        type: Number,
        isRequired: true
    },
    wounds: {
        type: Number,
        isRequired: true
    },
    strengthBonus: {
        type: Number,
        isRequired: true
    },
    toughnessBonus: {
        type: String,
        isRequired: true
    },
    movement: {
        type: String,
        isRequired: true
    },
    magic: {
        type: Number,
        isRequired: true
    },
    insanityPoints: {
        type: Number,
        isRequired: true
    },
    fatePoints: {
        type: Number,
        isRequired: true
    },
    skills: {
        type: String,
        isMultiline: true,
        isRequired: true
    },
    talents: {
        type: String,
        isMultiline: true,
        isRequired: true
    },
    specialRules: {
        type: String,
        isMultiline: true,
        isRequired: true
    },
    armour: {
        type: String,
        isRequired: true
    },
    armourPoints: {
        type: String,
        isRequired: true
    },
    weapons: {
        type: String,
        isRequired: true
    },
})

const Monster = mongoose.model('Monster', monsterSchema)

module.exports = Monster