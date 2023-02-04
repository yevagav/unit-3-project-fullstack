const { Schema, model } = require('mongoose')

const beautyPrefSchema = new Schema({
    skinType: {
        type: String
    },
    skinConcerns: {
        type: String
    },
    skinTone: {
        type: String
    },
    ingredientPrefer: {
        type: String
    },
    eyeColor: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = model('BeautyPref', beautyPrefSchema)
