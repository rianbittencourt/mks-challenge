// components/Header.js
import React from "react";
import styled from "styled-components";
import CardButton from "../components/CartButton";

const HeaderContainer = styled.header`
  background: #0f52ba;

  color: #fff;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.header`
  display: flex;

  align-items: center;
`;

const LogoPrincipalText = styled.div`
  font-size: 4rem;
  font-weight: bold;
`;

const LogoSecondaryText = styled.div`
  font-size: 2rem;
  font-weight: lighter;
  margin-top: 1rem;
  margin-left: 20px;
`;

const CartIcon = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoPrincipalText>MKS</LogoPrincipalText>
        <LogoSecondaryText>Sistemas</LogoSecondaryText>
      </LogoContainer>
      <CardButton></CardButton>
    </HeaderContainer>
  );
};

export default Header;
