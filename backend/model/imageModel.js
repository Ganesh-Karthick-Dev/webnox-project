const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    image : String
})

const imageModel = mongoose.model('imageData',imageSchema)

module.exports = imageModel