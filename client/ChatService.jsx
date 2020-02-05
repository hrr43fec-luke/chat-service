const React = require('react');
const PropTypes = require('prop-types');
const { default: styled } = require('styled-components');

const Header = require('./Header.jsx');
const Chats = require('./Chats.jsx');


const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  width: 339px;
  height: 100%;
`;

function App({ userId }) {
  return (
    <StyledApp>
      <Header />
      <Chats userId={userId} />
    </StyledApp>
  );
}
App.propTypes = {
  userId: PropTypes.number.isRequired,
};

module.exports = App;
