const React = require('react');

const Chat = require('./Chat.jsx');
const api = require('../server/api');

// 1px border, 339px content

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
      <div className="chats">
        {chats.map((c) => <Chat key={c._id} chat={c} />)}
      </div>
    );
  }
}

module.exports = Chats;
