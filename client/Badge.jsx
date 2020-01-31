const React = require('react');
const PropTypes = require('prop-types');
const { default: styled } = require('styled-components');

const ToolTip = require('./ToolTip.jsx');

const StyledBadge = styled.span`
  position: relative;  
  display: inline-block;
`;

class Badge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.badge = props.badge;
    // this.state.badge something
    this.state.hover = false;

    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    const { hover } = this.state;
    this.setState({ hover: !hover });
  }

  render() {
    const { badge, hover } = this.state;
    return (
      <StyledBadge
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <img
          className="badge"
          src={badge}
          alt="User's Chat Badge"
        />
        <ToolTip hidden={!hover} text="Temp text" />
      </StyledBadge>
    );
  }
}
Badge.propTypes = {
  badge: PropTypes.string.isRequired,
};

module.exports = Badge;
