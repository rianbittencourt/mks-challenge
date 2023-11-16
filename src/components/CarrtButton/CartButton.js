import React, { useState } from "react";

import {
  CartButtonContainer,
  CartButton,
  CountItems,
  CartIcon,
  CartMenu,
  MenuItem,
} from "./CartButton.style";


const CardButton = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <CartButtonContainer>
      <CartButton onClick={toggleMenu}>
        <CartIcon>🛒</CartIcon>
        <CountItems>0</CountItems>
      </CartButton>
      <CartMenu isOpen={menuOpen}>
        <MenuItem onClick={toggleMenu}>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
      </CartMenu>
    </CartButtonContainer>
  );
};

export default CardButton;
