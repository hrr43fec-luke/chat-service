const db = require('../db');

const Model = {
  getChatsForVid: (videoId) => new Promise((resolve, reject) => {
    db().find({ videoId })
      .then(results => {
        resolve(results);
      })
      .catch(error => { reject(error); });
  }),
};

module.exports = Model;
