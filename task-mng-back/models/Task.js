const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  category: { type: String, required: true },
  status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
  priority: { type: String, enum: ['High', 'Medium', 'Low'], default: 'Medium' },
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);