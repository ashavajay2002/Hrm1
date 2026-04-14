const express = require('express');
const router = express.Router();
const { 
  getEmployees, 
  updateEmployee, 
  deleteEmployee 
} = require('../controllers/employeeController');
const { protect } = require('../middleware/authMiddleware');
const authorize = require('../middleware/roleMiddleware');

// 🛰️ Personnel Matrix Routes
router.get('/', protect, authorize('admin', 'hr'), getEmployees);
router.put('/:id', protect, authorize('admin'), updateEmployee);
router.delete('/:id', protect, authorize('admin', 'hr'), deleteEmployee);

module.exports = router;
