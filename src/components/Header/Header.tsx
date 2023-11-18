import React, { useState } from "react";
import CardButton from "../CartButton/CartButton";
import CartMenu from "../CartMenu/CartMenu";
import {
  HeaderContainer,
  HeaderBox,
  LogoContainer,
  LogoPrincipalText,
  LogoSecondaryText,
} from "./Header.style";

const Header: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <HeaderContainer>
      <HeaderBox>
        <LogoContainer>
          <LogoPrincipalText>MKS</LogoPrincipalText>
          <LogoSecondaryText>Sistemas</LogoSecondaryText>
        </LogoContainer>
        <CardButton menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />
   
          <CartMenu menuIsOpen={menuIsOpen} onClose={toggleMenu} />
    
      </HeaderBox>
    </HeaderContainer>
  );
};

export default Header;
