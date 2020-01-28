const db = require('../db').Chat;

const Model = {
  getChatsForVid: (videoId) => new Promise((resolve, reject) => {
    db.find({ videoId })
      .then(results => {
        resolve(results);
      })
      .catch(error => { reject(error); });
  }),
};

module.exports = Model;
