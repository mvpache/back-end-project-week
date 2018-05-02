const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
const config = {
  dbuser: process.env.dbuser,
  dpass: process.env.dbpassword,
};
const server = express();

mongoose
  .connect(
    `mongodb://${config.dbuser}:${
      config.dpass
    }@ds113736.mlab.com:13736/lambdanotes`
  )
  .then(cnn => {
    console.log('\n=== connected to mongo ===\n');
  })
  .catch(err => {
    console.log('\n=== ERROR connecting to mongo ===\n');
  });

server.get('/', (req, res) => {
  res.send({ api: 'up and running' });
});

server.listen(PORT);
