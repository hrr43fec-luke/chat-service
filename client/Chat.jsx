const React = require('react');
const PropTypes = require('prop-types');

const formatTime = require('./formatTime');

function Chat({ chat }) {
  return (
    <div className="chatWrapper">
      <div className="chat">
        <span className="chatTime">
          {formatTime(chat.messageTimestamp)}
        </span>
        <span className="chatMessage">
          <img className="chatBadge" src={chat.chatBadge} />
          <span
            className="chatUserName"
            style={{ color: chat.displayNameColor }}
          >
            {chat.displayName}
          </span>
          : {chat.message}
        </span>
      </div>
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
