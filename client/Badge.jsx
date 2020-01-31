const React = require('react');
const PropTypes = require('prop-types');
const { default: styled } = require('styled-components');

const ToolTip = require('./ToolTip.jsx');

const StyledBadge = styled.span`
  position: relative;  
  display: inline-block;
  margin-right: 4px;
  vertical-align: top;
  margin-top: -3px;
  height: 18px;
  width: 18px;
`;

const StyledImg = styled.img`
  height: 18px;
  width: 18px;
`;

class Badge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.badge = props.badge;
    this.state.badgeText = props.badgeText;
    this.state.hover = false;

    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    const { hover } = this.state;
    this.setState({ hover: !hover });
  }

  render() {
    const { badge, badgeText, hover } = this.state;
    return (
      <StyledBadge
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <StyledImg
          src={badge}
          alt="User's Chat Badge"
        />
        <ToolTip hidden={!hover} text={badgeText} />
      </StyledBadge>
    );
  }
}
Badge.propTypes = {
  badge: PropTypes.string.isRequired,
  badgeText: PropTypes.string.isRequired,
};

module.exports = Badge;
