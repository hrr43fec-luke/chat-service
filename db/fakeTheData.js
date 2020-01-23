const faker = require('faker');

console.log(JSON.stringify({
  userName: faker.internet.userName(),
  displayName: faker.internet.userName(),
  chatBadge: faker.internet.avatar(),
  message: faker.lorem.sentence(),
  videoId: Math.floor(Math.random() * 10) + 1,
  messageTimestamp: Math.random() * 10
}));
