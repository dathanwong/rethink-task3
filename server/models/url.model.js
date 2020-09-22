const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const UrlSchema = new mongoose.Schema({
    url: {type: String,
        required: [true, "url is required"]},
    redirect: {type: String}
    },
    {timestamps: true});

UrlSchema.plugin(autoIncrement.plugin, {model: "Url"});
module.exports.Url = mongoose.model('Url', UrlSchema);