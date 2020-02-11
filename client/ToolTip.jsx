const React = require('react');
const PropTypes = require('prop-types');
const { default: styled } = require('styled-components');

const StyledToolTip = styled.span`
  visibility: ${(props) => (props.hidden ? 'hidden' : 'visible')};
  font-size: 12px;
  background: black;
  background: white;
  color: white;
  color: black;
  white-space: nowrap;
  padding: 2px 3px 5px 3px;
  margin-top: 3px;
  height: 12px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 0%;
  border-radius: 4px;
`;

const StyledToolTipArrow = styled.span`
  position: absolute;
  top: 100%;
  left: 10px;
  margin-left: -4px;
  border-width: 4px;
  border-style: solid;
  border-color: black transparent transparent transparent;
  border-color: white transparent transparent transparent;
`;

function ToolTip({ text, hidden }) {
  return (
    <StyledToolTip hidden={hidden}>
      {text}
      <StyledToolTipArrow />
    </StyledToolTip>
  );
}
ToolTip.propTypes = {
  text: PropTypes.string.isRequired,
  hidden: PropTypes.bool.isRequired,
};

module.exports = ToolTip;
