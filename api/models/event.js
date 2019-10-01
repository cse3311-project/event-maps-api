const mongoose = require('mongoose');

// design object
const eventSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: false},
    organization: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization', required: false},
    address: { type: String, required: true},
    longitude: { type: Number, required: true},
    latitude: { type: Number, required: true},
    category: { type: String, required: true},
    tag: {type: String},
    description: { type: String, required: false},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}

  });

//constructor based on schema
module.exports = mongoose.model('Event', eventSchema);