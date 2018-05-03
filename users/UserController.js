const User = require('../users/User');

module.exports = server => {
  server.post('/register', (req, res) => {
    const credentials = req.body;

    const user = new User(credentials);
    user
      .save()
      .then(savedUser => {
        res.status(201).json(savedUser);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
};
