const express = require('express');

const db = require('../db');
const router = require('./router');

const app = express();
const port = 3002;

app.use(router);

db.connect()
  .then(() => {
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
  });
