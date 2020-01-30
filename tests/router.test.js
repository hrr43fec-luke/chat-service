const request = require('supertest');
const express = require('express');

const db = require('../db');

const app = express();
app.use(require('../server/router'));

beforeAll(() => db.connect());

describe('', () => {
  it('responds to favicon requests', (done) => {
    request(app)
      .get('/favicon.ico')
      .expect(200, done);
  });

  it('responds to /api/chats/2', (done) => {
    request(app)
      .get('/api/chats/2')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(/Aylin78/, done);
  });

  it('serves up index.html', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect(/<!DOCTYPE html>/, done)
  })
});

afterAll(() => db.disconnect());
