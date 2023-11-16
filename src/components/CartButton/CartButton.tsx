
import React, { useState } from "react";
import CartMenu from "../CartMenu/CartMenu";
import {
  CartButtonContainer,
  CartButton,
  CountItems,
  CartIcon,
} from "./CartButton.style";

const CardButton: React.FC = () => {
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
      <CartMenu isOpen={menuOpen} onClose={toggleMenu} />
    </CartButtonContainer>
  );
};

export default CardButton;
