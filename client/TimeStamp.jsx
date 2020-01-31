const React = require('react');
const PropTypes = require('prop-types');
const { default: styled } = require('styled-components');

const ToolTip = require('./ToolTip.jsx');
const formatTime = require('./formatTime');

const StyledTimeStamp = styled.span`
  color: #1f1f23;
  position: relative;  
  display: inline-block;
  font-size: 11px;
  padding: 1px 4px;
  margin-right: 5px;
  height: 12px;
  color: ${props => (props.hover ? 'white' : '')};
  background: ${props => (props.hover ? 'purple' : '')};
  cursor: ${props => (props.hover ? 'pointer' : '')};
`;

const tip = 'Jump to video';

class TimeStamp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.timeStamp = props.timeStamp;
    this.state.hover = false;

    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    const { hover } = this.state;
    this.setState({ hover: !hover });
  }

  render() {
    const { timeStamp, hover } = this.state;

    return (
      <StyledTimeStamp
        hover={hover}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        {formatTime(timeStamp)}
        <ToolTip hidden={!hover} text={tip} />
      </StyledTimeStamp>
    );
  }
}

TimeStamp.propTypes = {
  timeStamp: PropTypes.number.isRequired,
};

module.exports = TimeStamp;
