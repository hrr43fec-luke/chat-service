const React = require('react');
const { default: styled } = require('styled-components');

const CollapseArrow = require('./CollapseArrow.jsx');

const StyledHeader = styled.div`
  flex: none;
  height: 50px;
  width: 100%;
  background-color: black;
  color: white;
  font-family: Roobert, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
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
