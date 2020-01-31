const mongoose = require('mongoose');

const env = require('../server/environment');
const schema = require('./schema.js');

const dbName = 'luke-chat';
const dbURL = `mongodb://${env.dbHost}`;

module.exports.connect = () => mongoose.connect(`${dbURL}:${env.dbPort}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: dbName,
  user: env.dbUser,
  pass: env.dbPwd,
});

module.exports.disconnect = () => mongoose.disconnect();

module.exports.Chat = mongoose.model('Chat', schema);
