const express = require('express');
const router = express.Router();
const { generatePayroll, getMyPayroll, getAllPayroll, updatePayrollStatus } = require('../controllers/payrollController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.post('/', protect, authorize('admin', 'hr'), generatePayroll);
router.get('/me', protect, getMyPayroll);
router.get('/', protect, authorize('admin', 'hr'), getAllPayroll);
router.put('/:id', protect, authorize('admin', 'hr'), updatePayrollStatus);

module.exports = router;
