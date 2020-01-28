const Model = require('../server/Model');
const db = require('../db');

beforeAll(() => db.connect());

test('Test: Model.getChatsForVid(1)', () => Model.getChatsForVid(1).then(data => {
  expect(data.length).toBe(10);
}));

afterAll(() => db.disconnect());
