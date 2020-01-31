const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  userName: String,
  displayName: String,
  displayNameColor: String,
  badge: String,
  badgeText: String,
  message: String,
  videoId: Number,
  timeStamp: Number,
});

module.exports = chatSchema;
