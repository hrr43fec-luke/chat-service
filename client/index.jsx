const React = require('react');
const ReactDOM = require('react-dom');

const ChatService = require('./ChatService.jsx');

let userId = window.location.search.slice(1);

if (!Number(userId)) userId = 1;

ReactDOM.render(
  <ChatService userId={userId} />,
  document.getElementById('chat-service'),
);
