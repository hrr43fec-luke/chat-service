const React = require('react');
const ReactDOM = require('react-dom');

const Chats = require('./Chats.jsx');

let userId = window.location.search.slice(1);

if (!Number(userId)) userId = 1;

ReactDOM.render(
  <Chats userId={userId} />,
  document.getElementById('app'),
);
