const React = require('react');
const { default: styled } = require('styled-components');

const CollapseArrow = require('./CollapseArrow.jsx');

const StyledHeader = styled.div`
  flex: none;
  height: 50px;
  width: 100%;
  font-family: Roobert, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3px;
  background-color: #0e0e10;
  color: #F0E4D8;
`;

function Header() {
  return (
    <div>
      <StyledHeader>
        <CollapseArrow />
        Chat on Videos
      </StyledHeader>
    </div>
  );
}

module.exports = Header;
