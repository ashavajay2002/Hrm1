const mongoose = require('mongoose');

const payrollSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  month: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  basicSalary: {
    type: Number,
    required: true
  },
  allowances: {
    type: Number,
    default: 0
  },
  deductions: {
    type: Number,
    default: 0
  },
  netSalary: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Processed', 'Paid'],
    default: 'Pending'
  },
  paymentDate: {
    type: Date
  }
}, { timestamps: true });

module.exports = mongoose.model('Payroll', payrollSchema);
