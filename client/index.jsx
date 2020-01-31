import './styles.css';

const React = require('react');
const ReactDOM = require('react-dom');

const Chats = require('./Chats.jsx');

ReactDOM.render(
  <Chats />,
  document.getElementById('app'),
);
