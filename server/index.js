const express = require('express');

const env = require('./environment');
const db = require('../db');
const router = require('./router');

const app = express();
const port = env.serverPort;

app.use(router);

db.connect()
  .then(() => {
    app.listen(port, null);
  });
