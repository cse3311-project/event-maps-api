const mongoose = require('mongoose');

// design object
const taskSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    taskText: { type: String, required: false},
    completed: { type: Boolean, required: false, default: false}
  });

//constructor based on schema
module.exports = mongoose.model('Task', taskSchema);