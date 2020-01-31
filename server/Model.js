const db = require('../db').Chat;

const Model = {
  getChatsForVid: (videoId) => new Promise((resolve, reject) => {
    db.find({ videoId }, null, { sort: { messageTimestamp: 1 } })
      .then(results => {
        resolve(results);
      })
      .catch(error => { reject(error); });
  }),
};

module.exports = Model;
