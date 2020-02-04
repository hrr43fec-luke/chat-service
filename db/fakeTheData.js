const faker = require('faker');
const mongoose = require('mongoose');

const env = require('../server/environment');
const schema = require('./schema.js');

const dbName = 'luke-chat';
const dbURL = `mongodb://${env.dbHost}`;

mongoose.connect(`${dbURL}:${env.dbPort}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName,
  user: env.dbUser,
  pass: env.dbPwd,
})
  .then(() => {
    // console.log('connected to DB!');

    const Chat = mongoose.model('Chat', schema);

    const arr = [];
    for (let videoId = 1; videoId < 100; videoId += 1) {
      const numOfVideos = Math.floor(Math.random() * 100);
      for (let i = 0; i < numOfVideos; i += 1) {
        arr.push({
          userName: faker.internet.userName(),
          displayName: faker.internet.userName(),
          displayNameColor: faker.internet.color(),
          badge: faker.internet.avatar(),
          badgeText: `${faker.lorem.word()} ${faker.lorem.word()}`,
          message: faker.lorem.sentence(),
          videoId,
          timeStamp: Math.random() * 10,
        });
      }
    }

    Chat.create(arr)
      .then(() => {
        // console.log('all promises complete');
        mongoose.disconnect();
      });
  });
// .catch((error) => { console.error('couldnt connect to db', error); });
