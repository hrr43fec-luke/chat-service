const express = require('express');

const Model = require('./Model.js');

const router = express.Router();

// app.use(express.static('dist'));
router.get('/favicon.ico', (req, res) => {
  res.end();
});

router.get('/:videoId', (req, res) => {
  Model.getChatsForVid(req.params.videoId)
    .then(results => res.send(results));
});

module.exports = router;
