const mongoose = require('mongoose');

module.exports.database = (req, res, next) => {
    mongoose.connect("mongodb://localhost/govt", {
        useNewUrlParser: true
    }).then(() => {
        console.log('Connected to database');
    }).catch((err) => {
        console.log("Failed to connect",
            err);
    });
    next();
}