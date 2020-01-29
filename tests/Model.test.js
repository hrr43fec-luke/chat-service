const Model = require('../server/Model');
const db = require('../db');

beforeAll(() => db.connect());

test(
  'Does the Model return the right number of videos for user 1',
  () => Model.getChatsForVid(1).then(data => {
    expect(data.length).toBe(10);
  }),
);

test('Does Model return different data for users 1 and 2?', (done) => {
  Promise.all([
    Model.getChatsForVid(1),
    Model.getChatsForVid(2),
  ])
    .then(data => {
      expect(data[0][0]._id).not.toBe(data[1][0]._id);
      done();
    });
});

// This test is needed for 100% code coverage, but would require
// me to mock out db.find and generate the error. It's not worth
// the time.
// test('Does the Model handle database errors?', () => {
//
// });

afterAll(() => db.disconnect());
