import React from "react";
import CardButton from "../CartButton/CartButton";
import {
  HeaderContainer,
  HeaderBox,
  LogoContainer,
  LogoPrincipalText,
  LogoSecondaryText,
} from "./Header.style";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderBox>
        <LogoContainer>
          <LogoPrincipalText>MKS</LogoPrincipalText>
          <LogoSecondaryText>Sistemas</LogoSecondaryText>
        </LogoContainer>
        <CardButton></CardButton>
      </HeaderBox>
    </HeaderContainer>
  );
};

export default Header;
