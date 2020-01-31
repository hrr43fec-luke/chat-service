const React = require('react');
const PropTypes = require('prop-types');
const { default: styled } = require('styled-components');

const TimeStamp = require('./TimeStamp.jsx');
const Badge = require('./Badge.jsx');
const DisplayName = require('./DisplayName.jsx');
const Message = require('./Message.jsx');

const StyledChat = styled.section`
  display: flex;
  margin-bottom: 4px;
`;

function Chat({ chat }) {
  return (
    <StyledChat>
      <TimeStamp timeStamp={chat.timeStamp} />
      <span>
        <Badge badge={chat.badge} badgeText={chat.badgeText} />
        <DisplayName displayName={chat.displayName} displayNameColor={chat.displayNameColor} />
        {': '}
        <Message message={chat.message} />
      </span>
    </StyledChat>
  );
}
Chat.propTypes = {
  chat: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    displayNameColor: PropTypes.string.isRequired,
    badge: PropTypes.string.isRequired,
    badgeText: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    timeStamp: PropTypes.number.isRequired,
  }).isRequired,
};

module.exports = Chat;
