const React = require('react');
const PropTypes = require('prop-types');

function Message({ message }) {
  return (
    <span>
      {message}
    </span>
  );
}
Message.propTypes = {
  message: PropTypes.string.isRequired,
};

module.exports = Message;
