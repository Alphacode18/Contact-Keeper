const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const User = require('../models/User');

/*
 * @route   POST /api/users
 * @desc    Register a user
 * @access  Public
 */

router.post(
  '/',
  [
    check('name', 'Please include a name').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    } else {
      res.send('passed');
    }
  }
);

module.exports = router;
