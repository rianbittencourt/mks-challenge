import React from "react";
import { useCartStore } from "@/store/cartStore";
import {
  CartButtonContainer,
  CartButton,
  CountItems,
  CartIcon,
} from "./CartButton.style";

interface CardButtonProps {
  menuIsOpen: boolean;
  toggleMenu: () => void;
}

const CardButton: React.FC<CardButtonProps> = ({ toggleMenu }) => {
  const { cart } = useCartStore();

  return (
    <CartButtonContainer>
      <CartButton onClick={toggleMenu}>
        <CartIcon>🛒</CartIcon>
        <CountItems data-testid="count-items">
          {cart ? cart.length : 0}
        </CountItems>
      </CartButton>
    </CartButtonContainer>
  );
};

export default CardButton;
