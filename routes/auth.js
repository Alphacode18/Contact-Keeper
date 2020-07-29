const express = require('express');

const router = express.Router();

/*
 * @route   GET /api/auth
 * @desc    Get a logged in user
 * @access  Private
 */

router.get('/', (req, res, next) => {
  res.send('Get logged in user');
});

/*
 * @route   POST /api/auth
 * @desc    Auth user and get token
 * @access  Public
 */

router.post('/', (req, res, next) => {
  res.send('Login User');
});

module.exports = router;
