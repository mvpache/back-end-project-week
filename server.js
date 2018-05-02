const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
const config = {
  dbuser: process.env.DB_USER,
  dbpass: process.env.DB_PASS,
};
const server = express();

mongoose
  .connect(
    `mongodb://${config.dbuser}:${
      config.dbpass
    }@ds113736.mlab.com:13736/lambdanotes`
  )
  .then(() => {
    console.log('\n=== connected to mongo ===\n');
  })
  .catch(err => {
    console.log('\n=== ERROR connecting to mongo ===\n');
  });

server.get('/', (req, res) => {
  res.send({ api: 'up and running' });
});

server.listen(PORT);
