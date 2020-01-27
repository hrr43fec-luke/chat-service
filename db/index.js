const mongoose = require('mongoose');

const dbconfig = require('./config.js');
const schema = require('./schema.js');

module.exports.connect = () => mongoose.connect(`${dbconfig.dbURL}:${dbconfig.dbPort}/${dbconfig.dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports.disconnect = () => mongoose.disconnect();

module.exports.Chat = mongoose.model('Chat', schema);
