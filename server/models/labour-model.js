const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const labourSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    contact: {
        type: String
    },
    image: {
        data: Buffer,
        contentType: String
    },
    comments: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Labour', labourSchema);