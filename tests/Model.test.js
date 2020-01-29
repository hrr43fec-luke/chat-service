const Model = require('../server/Model');
const db = require('../db');

beforeAll(() => db.connect());

test(
  'Does the Model return the right number of videos for user 1',
  () => Model.getChatsForVid(1).then(data => {
    expect(data.length).toBe(10);
  }),
);

// This test is needed for 100% code coverage, but would require
// me to mock out db.find and generate the error. It's not worth
// the time.
// test('Does the Model handle database errors?', () => {
//
// });

afterAll(() => db.disconnect());
