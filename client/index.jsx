const React = require('react');
const ReactDOM = require('react-dom');

const App = require('./App.jsx');

let userId = window.location.search.slice(1);

if (!Number(userId)) userId = 1;

ReactDOM.render(
  <App userId={userId} />,
  document.getElementById('app'),
);
