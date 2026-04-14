const express = require('express');
const router = express.Router();
const { clockIn, clockOut, getMyAttendance, getAllAttendance } = require('../controllers/attendanceController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.post('/clock-in', protect, clockIn);
router.put('/clock-out', protect, clockOut);
router.get('/me', protect, getMyAttendance);
router.get('/', protect, authorize('admin', 'hr'), getAllAttendance);

module.exports = router;
