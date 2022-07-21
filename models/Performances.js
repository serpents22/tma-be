const mongoose = require('mongoose')

const PerformanceSchema = mongoose.Schema({
  date: {
    type: Date,
  },
  target_time: {
    type: Number,
    required: true
  },
  working_time: {
    type: Number,
    required: true
  },
  achievement: {
    type: Number,
    required: true
  },
  overtime: {
    type: Number,
    required: true
  },
  day: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Performances', PerformanceSchema)