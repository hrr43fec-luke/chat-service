const faker = require('faker');
const mongoose = require('mongoose');

const schema = require('./schema.js');

const dbName = 'luke-chat';
const dbURL = 'mongodb://localhost';
const dbPort = 3012;

mongoose.connect(`${dbURL}:${dbPort}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('connected to DB!');

    const Chat = mongoose.model('Chat', schema);

    const arr = [];
    for (let i = 0; i < 250; i++) {
      arr.push({
        userName: faker.internet.userName(),
        displayName: faker.internet.userName(),
        displayNameColor: faker.internet.color(),
        chatBadge: faker.internet.avatar(),
        chatBadgeText: `${faker.lorem.word()} ${faker.lorem.word()}`,
        message: faker.lorem.sentence(),
        videoId: Math.floor(Math.random() * 10) + 1,
        messageTimestamp: Math.random() * 10,
      });
    }

    Chat.create(arr)
      .then(() => {
        console.log('all promises complete');
        mongoose.disconnect();
      });
  })
  .catch(error => { console.error('couldnt connect to db', error); });
