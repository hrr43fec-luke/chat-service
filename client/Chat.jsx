const React = require('react');
const PropTypes = require('prop-types');
const { default: styled } = require('styled-components');

const TimeStamp = require('./TimeStamp.jsx');
const Badge = require('./Badge.jsx');
const DisplayName = require('./DisplayName.jsx');
const Message = require('./Message.jsx');

const StyledChat = styled.section`
  display: flex;
`;

const StyledSpan = styled.span`
  padding-bottom: 10px;
`;

function Chat({ chat }) {
  return (
    <StyledChat>
      <TimeStamp timeStamp={chat.timeStamp} />
      <StyledSpan>
        <Badge badge={chat.badge} badgeText={chat.badgeText} />
        <DisplayName displayName={chat.displayName} displayNameColor={chat.displayNameColor} />
        {': '}
        <Message message={chat.message} />
      </StyledSpan>
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
