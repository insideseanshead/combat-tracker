const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const monsterSchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
        isMultiline: true
    },
    weaponSkill: {
        type: Number
    },
    balisticSkill: {
        type: Number
    },
    strength: {
        type: Number
    },
    toughness: {
        type: Number
    },
    agility: {
        type: Number
    },
    intelligence: {
        type: Number
    },
    willPower: {
        type: Number
    },
    fellowship: {
        type: Number
    },
    actions: {
        type: Number
    },
    wounds: {
        type: Number
    },
    strengthBonus: {
        type: Number
    },
    toughnessBonus: {
        type: String
    },
    movement: {
        type: String
    },
    magic: {
        type: String
    },
    insanityPoints: {
        type: Number
    },
    fatePoints: {
        type: Number
    },
    skills: {
        type: String,
        isMultiline: true
    },
    talents: {
        type: String,
        isMultiline: true
    },
    specialRules: {
        type: String,
        isMultiline: true
    },
    insanities: {
        type: String
    },
    armour: {
        type: String
    },
    armourPoints: {
        type: String
    },
    weapons: {
        type: String
    },
})

const Monster = mongoose.model('Monster', monsterSchema)

module.exports = Monster