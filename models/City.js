const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CitySchema = new Schema({
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }
}, { collection: "City" });

module.exports = mongoose.model('City', CitySchema);