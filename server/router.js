const express = require('express');

const Model = require('./Model.js');

const router = express.Router();

router.use(express.static('www'));

router.get('/favicon.ico', (req, res) => {
  res.end();
});

router.get('/:videoId', (req, res) => {
  Model.getChatsForVid(req.params.videoId)
    .then(results => res.send(results));
});

module.exports = router;
