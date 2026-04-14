const Leave = require('../models/Leave');

// @desc    Apply for leave
// @route   POST /api/leaves
// @access  Private/Employee
exports.applyLeave = async (req, res) => {
  try {
    const { leaveType, startDate, endDate, reason } = req.body;
    const leave = await Leave.create({
      user: req.user._id,
      leaveType,
      startDate,
      endDate,
      reason,
      status: 'pending'
    });
    res.status(201).json(leave);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all leaves
// @route   GET /api/leaves
// @access  Private/Admin/HR
exports.getAllLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find().populate('user', 'email profile');
    res.json(leaves);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Approve or reject leave
// @route   PUT /api/leaves/:id
// @access  Private/Admin/HR
exports.updateLeaveStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const leave = await Leave.findById(req.params.id);
    if (!leave) {
      return res.status(404).json({ message: 'Leave request not found' });
    }
    leave.status = status;
    const updatedLeave = await leave.save();
    res.json(updatedLeave);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get my leaves
// @route   GET /api/leaves/my
// @access  Private/Employee
exports.getMyLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find({ user: req.user._id });
    res.json(leaves);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
