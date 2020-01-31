const React = require('react');
const PropTypes = require('prop-types');

const formatTime = require('./formatTime');

function Chat({ chat }) {
  return (
    <div className="chatWrapper">
      <div className="chat">
        <span className="chatToolTip chatHoverBackground">
          <span className="chatTime chatToolTip chatHoverBackground">
            {formatTime(chat.messageTimestamp)}
          </span>
          <span className="chatToolTipText">
            Jump to video
          </span>
        </span>
        <span className="chatMessage">
          <span className="chatToolTip">
            <img
              className="chatBadge"
              src={chat.chatBadge}
              alt="User's Chat Badge"
            />
            <span className="chatToolTipText">
              {chat.chatBadgeText}
            </span>
          </span>
          <span
            className="chatUserName"
            style={{ color: chat.displayNameColor }}
          >
            {chat.displayName}
          </span>
          :
          {` ${chat.message}`}
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
    chatBadgeText: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    messageTimestamp: PropTypes.number.isRequired,
  }).isRequired,
};

module.exports = Chat;
