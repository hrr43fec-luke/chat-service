const express = require('express');

const env = require('./environment');
const db = require('../db');
const router = require('./router');

const app = express();
const { port } = env;

app.use(router);

db.connect()
  .then(() => {
    // eslint-disable-next-line no-console
    app.listen(port, () => console.log('Listening on port ', port));
  });
