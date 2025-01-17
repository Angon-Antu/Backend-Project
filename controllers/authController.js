const jwt = require('jsonwebtoken');

const createToken = (req, res) => {
  const token = jwt.sign({ user: 'testUser' }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};

const postResponse = (req, res) => {
  res.send('I am post body');
};

module.exports = { createToken, postResponse };
