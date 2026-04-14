const express = require('express');
const router = express.Router();
const { login, getMe, createUser, updatePassword } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

router.post('/login', login);
router.post('/create-user', protect, createUser);
router.get('/me', protect, getMe);
router.put('/update-password', protect, updatePassword);

module.exports = router;
