const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: String,
    required: true
  },
  clockIn: {
    type: String,
    required: true
  },
  clockOut: {
    type: String
  },
  status: {
    type: String,
    enum: ['Present', 'Late', 'Half Day', 'Absent'],
    default: 'Present'
  },
  location: {
    lat: Number,
    lng: Number
  }
}, { timestamps: true });

module.exports = mongoose.model('Attendance', attendanceSchema);
