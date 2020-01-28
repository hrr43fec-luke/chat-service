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
    fetch(`${api}/2`)
      .then(response => {
        console.log('Received response from server');
        response.json()
          .then(body => {
            this.setState({ chats: body });
          });
      });
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
