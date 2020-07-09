const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const jwt = require('jsonwebtoken');

//Registration Page
// Create validation for missing fields. Refer to mongoose validation documents
//Authorization: Bearer <access_token>
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
    if (err) return (req.error = err);
    return (req.payload = payload);
  });
  next();
};
router.get('/validate_stored_token', authenticateToken, async (req, res) => {
  try {
    if (req.error) throw req.error;
    res.json({ status: 'success', data: req.payload.payload });
  } catch (err) {
    return res.json({
      status: 'fail',
      message: err,
    });
  }
});
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({
    name,
    email,
    password,
  });
  try {
    await user.validate();
    user.save(user.setPassword(user.password));
    const payload = {
      user: user.name,
      email,
      id: user.id,
    };

    const accessToken = jwt.sign({ payload }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '1 Hour',
    });
    res.json({
      status: 'success',
      data: { accessToken, user: payload },
    });
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
//Finish setting up authorization middleware
// Go through with JWT and set as User Context, pass users Name as JSON data payload
// Don't worry about anything else until Blog page is built, keeping in mind comments can be added to each post only by logged in users
router.post('/login', async (req, res) => {
  res.set({
    Accept: 'application/vnd.api+json',
    'X-Content-Type-Options': 'nosniff',
    'Content-Type': 'application/vnd.api+json',
  });

  const logIn = async ({ email, password }) => {
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
          expiresIn: '1 Hour',
        }
      );

      return res.json({
        status: 'success',
        data: { accessToken, user: payload },
      });
    } catch (err) {
      res.json({ status: 'fail', message: err.message, data: err });
    }
  };
  return await logIn(req.body);
});

module.exports = router;
