const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: 'userModel' // 🧬 Dynamic Reference for cross-collection joins
  },
  userModel: {
    type: String,
    required: true,
    enum: ['EmployeeUser', 'HR', 'Manager']
  },
  leaveType: {
    type: String,
    required: true,
    enum: ['sick', 'vacation', 'casual', 'maternity', 'emergency', 'annual', 'paternity']
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  }
}, { timestamps: true });

module.exports = mongoose.model('Leave', leaveSchema);
