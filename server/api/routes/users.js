const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const jwt = require('jsonwebtoken');
//Registration Page
// Create validation for missing fields. Refer to mongoose validation documents

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);
};

router.post('/register', async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  const user = new User({
    name,
    email,
    password,
  });
  try {
    await user.validate();
    user.save(user.setPassword(user.password)).then(
      res.json({
        status: 'success',
        data: {
          user: user.name,
          email: user.email,
          id: user.id,
        },
      })
    );
  } catch (err) {
    console.log(err);
    res.json({
      status: 'fail',
      message: err.message,
      data: {
        err,
      },
    });
  }
  //   res.redirect('http://localhost:3000/');
});
//Log In
router.post('/login', async (req, res) => {
  const logIn = async ({ email, password }) => {
    res.set({
      Accept: 'application/vnd.api+json',
      'X-Content-Type-Options': 'nosniff',
      'Content-Type': 'application/vnd.api+json',
    });

    try {
      const user = await User.validUser(email);
      user.validPassword(password);
      const payload = {
        user: user.name,
        email,
        id: user.id,
      };
      const accessToken = jwt.sign(
        { payload },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: '1h',
        }
      );
      return res.json({ payload });
    } catch (err) {
      res.json({ status: 'fail', message: err.message, data: err });
    }
  };
  return await logIn(req.body);
});

module.exports = router;
