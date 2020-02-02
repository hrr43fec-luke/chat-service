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
    const Chat = mongoose.model('Chat', schema);

    const arr = [];
    for (let i = 0; i < 250; i += 1) {
      arr.push({
        userName: faker.internet.userName(),
        displayName: faker.internet.userName(),
        displayNameColor: faker.internet.color(),
        badge: faker.internet.avatar(),
        badgeText: `${faker.lorem.word()} ${faker.lorem.word()}`,
        message: faker.lorem.sentence(),
        videoId: Math.floor(Math.random() * 10) + 1,
        timeStamp: Math.random() * 10,
      });
    }

    Chat.create(arr)
      .then(() => {
        mongoose.disconnect();
      });
  })
  // eslint-disable-next-line no-console
  .catch((error) => { console.error('couldn\'t connect to db', error); });
