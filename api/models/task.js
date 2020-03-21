const mongoose = require('mongoose');

// design object
const taskSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    taskText: { type: String, required: true},
    completed: { type: Boolean, required: true, default: false},
    datePosted: { type: Date, required: true}
  });

//constructor based on schema
module.exports = mongoose.model('Task', taskSchema);