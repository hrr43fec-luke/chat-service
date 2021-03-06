const React = require('react');
const { default: styled } = require('styled-components');
const PropTypes = require('prop-types');

const Chat = require('./Chat.jsx');
const api = require('../server/api');

const StyledChats = styled.div`
  font-family: Roobert, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  background-color: #0e0e10;
  color: #F0E4D8;
`;

class Chats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.userId = props.userId;
    this.state.chats = [];
  }

  componentDidMount() {
    const { userId } = this.state;
    return fetch(`${api}/${userId}`)
      .then((response) => response.json())
      .then((body) => {
        this.setState({ chats: body });
        return body;
      });
    // .catch((error) => console.error(error));
  }

  render() {
    const { chats } = this.state;
    // const c2 = chats.slice(0, 2);
    return (
      <StyledChats>
        {/* eslint-disable-next-line no-underscore-dangle */}
        {chats.map((c) => <Chat key={c._id} chat={c} />)}
      </StyledChats>
    );
  }
}
Chats.propTypes = {
  userId: PropTypes.number.isRequired,
};

module.exports = Chats;
