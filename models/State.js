const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StateSchema = new Schema({
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
}, { collection: "State" });

module.exports = mongoose.model('State', StateSchema);