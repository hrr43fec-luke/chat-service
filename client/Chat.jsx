const React = require('react');
const PropTypes = require('prop-types');

function Chat({ chat }) {
  return (
    <div>
      Time:
      {chat.messageTimestamp}
      Badge:
      {chat.chatBadge}
      Name:
      {chat.displayName}
      Message:
      {chat.message}
    </div>
  );
}
Chat.propTypes = {
  chat: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    displayNameColor: PropTypes.string.isRequired,
    chatBadge: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    messageTimestamp: PropTypes.number.isRequired,
  }).isRequired,
};

module.exports = Chat;
