const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = process.env.PORT || 5000;
const config = {
  dbuser: process.env.DB_USER,
  dbpass: process.env.DB_PASS,
};

const server = express();
server.use(express.json());
server.use(cors());

const userRoutes = require('./users/UserController')(server);

mongoose
  .connect(`mongodb://lambda:lambda@ds113736.mlab.com:13736/lambdanotes`)
  .then(connected => {
    console.log('=== connected to mongo ===');
  })
  .catch(err => {
    console.log('=== ERROR connecting to mongo ===');
  });

server.get('/', (req, res) => {
  res.send({ api: 'up and running' });
});

server.listen(PORT);
