const React = require('react');
const { default: styled } = require('styled-components');

const StyledSVG = styled.svg`
  position: relative;
  left: -150px;
  top: 1px;
  width: 23px;
  height: 18px;
`;

const StyledToolTip = styled.span`
  position: absolute;
  left: -210px;
  top: -3px;
  margin-top: 3px;
  height: 12px;
  padding: 2px 3px 5px 3px;
  border-radius: 4px;
  visibility: ${(props) => (props.hidden ? 'hidden' : 'visible')};
  font-size: 12px;
  background: black;
  color: white;
  white-space: nowrap;
`;

class CollapseArrow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.hover = false;

    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    const { hover } = this.state;
    this.setState({ hover: !hover });
  }

  render() {
    const { hover } = this.state;

    return (
      <span
        style={{ position: 'absolute' }}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <StyledSVG stroke="black" strokeWidth={1}>
          <path d="M 2 2 V 16 M 6 9 H 22 M 22 9 L 14 3 M 22 9 L 14 15" />
        </StyledSVG>
        <StyledToolTip hidden={!hover}>
          Collapse
        </StyledToolTip>
      </span>
    );
  }
}

module.exports = CollapseArrow;
