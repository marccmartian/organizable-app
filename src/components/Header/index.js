import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #58595a;
  width: 100%;
  height: 40px;
  color: white;
  font-weight: 700;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: lightgray;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <p>
        {"{ Organiz"}
        <span>able</span>
        {" }"}
      </p>
    </HeaderContainer>
  );
};

export default Header;
