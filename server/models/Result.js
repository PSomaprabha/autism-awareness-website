const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  name: String,
  age: Number,
  score: Number,
  autismType: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Result', resultSchema);
