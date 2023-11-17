import React, { useState } from "react";
import { useCartStore } from "@/store/cartStore"; // Certifique-se de importar corretamente o hook

import CartMenu from "../CartMenu/CartMenu";
import {
  CartButtonContainer,
  CartButton,
  CountItems,
  CartIcon,
} from "./CartButton.style";

const CardButton: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cart = useCartStore((state) => state.cart); // Acesse o estado do carrinho

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <CartButtonContainer>
      <CartButton onClick={toggleMenu}>
        <CartIcon>🛒</CartIcon>
        <CountItems>{cart.length}</CountItems>
      </CartButton>
      <CartMenu isOpen={menuOpen} onClose={toggleMenu} />
    </CartButtonContainer>
  );
};

export default CardButton;
