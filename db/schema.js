const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  userName: String,
  displayName: String,
  displayNameColor: String,
  chatBadge: String,
  message: String,
  videoId: Number,
  messageTimestamp: Number,
});

module.exports = chatSchema;
