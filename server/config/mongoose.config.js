const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost/shorturldb");
autoIncrement.initialize(connection);
mongoose.connect("mongodb://localhost/shorturldb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established connection to the database"))
    .catch(err => console.log("Something went wrong ", err));