const express = require('express');
const router = express.Router();
const User = require('../../models/Users');
const path = require('path');
//Registration Page
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({
    name,
    email,
    password,
  });

  await user
    .save(user.setPassword(user.password))
    .catch((err) => res.send(err.message));
  //   res.redirect('http://localhost:3000/');
});

//Log In
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    const authenticated = await user.validPassword(password);
    if (authenticated) res.status(200).send(`Welcome, ${user.name}`);
  } catch (err) {
    res.set({ Authorization: 'Basic' });
    res.status(401).send('Username or Password is incorrect');
  }
});

module.exports = router;
// path.join(__dirname, 'src', 'components', 'layout', 'pages', 'Contact.js')
