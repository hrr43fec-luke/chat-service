const React = require('react');
const { default: styled } = require('styled-components');

const Chat = require('./Chat.jsx');
const api = require('../server/api');

const StyledChats = styled.div`
  width: 339px;
  font-family: Roobert, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
`;

class Chats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.chats = [];
  }

  componentDidMount() {
    return fetch(`${api}/2`)
      .then(response => response.json())
      .then(body => {
        this.setState({ chats: body });
        return body;
      })
      .catch(error => console.error(error));
  }

  render() {
    const { chats } = this.state;
    return (
      <StyledChats>
        {chats.map((c) => <Chat key={c._id} chat={c} />)}
      </StyledChats>
    );
  }
}

module.exports = Chats;
