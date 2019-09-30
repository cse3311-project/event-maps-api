const mongoose = require('mongoose');

// design object
const rankSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    points: { type: Number, required: true}
  });


//constructor based on schema
module.exports = mongoose.model('Rank', rankSchema);