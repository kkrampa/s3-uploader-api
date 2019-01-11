const express = require('express');
const { check, validationResult } = require('express-validator/check');

const User = require('../models/user');

const router = express.Router();

router.post('/register', [
  check('email').isEmail().withMessage('Invalid email'),
  check('password').isLength({ min: 6 }).withMessage('Password should'),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  const { email, password } = req.body;

  User.create({
    email,
    password,
  }, (err, doc) => {
    if (err) {
      res.send(err).status(400);
      return;
    }
    res.send(doc);
  });
});

module.exports = router;
