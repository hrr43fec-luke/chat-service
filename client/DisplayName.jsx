const React = require('react');
const PropTypes = require('prop-types');
const { default: styled } = require('styled-components');

const StyledDisplayName = styled.span`
  color: ${(props) => props.color};
  text-decoration: ${(props) => (props.hover ? 'underline' : '')};
  cursor: ${(props) => (props.hover ? 'pointer' : '')};
  background-color: black;
  font-weight: 900;
`;

class DisplayName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.displayName = props.displayName;
    this.state.displayNameColor = props.displayNameColor;
    this.state.hover = false;

    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    const { hover } = this.state;
    this.setState({ hover: !hover });
  }

  render() {
    const { displayName, displayNameColor, hover } = this.state;

    return (
      <StyledDisplayName
        color={displayNameColor}
        hover={hover}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        {displayName}
      </StyledDisplayName>
    );
  }
}

DisplayName.propTypes = {
  displayName: PropTypes.string.isRequired,
  displayNameColor: PropTypes.string.isRequired,
};

module.exports = DisplayName;
