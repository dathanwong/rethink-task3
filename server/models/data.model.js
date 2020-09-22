const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    name: {type: String,
        required: [true, "Name is required"]}},
    {timestamps: true});

module.exports.Data = mongoose.model('Data', DataSchema);