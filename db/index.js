const mongoose = require('mongoose');

const dbconfig = require('./config.js');
const schema = require('./schema.js');

mongoose.connect(`${dbconfig.dbURL}:${dbconfig.dbPort}/${dbconfig.dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Chat = mongoose.model('Chat', schema);

module.exports = () => Chat;
