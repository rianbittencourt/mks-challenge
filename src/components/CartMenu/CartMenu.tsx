// CartMenu.tsx
import React from "react";
import {
  StyledCartMenu,
  MenuItem,
  TitleCartMenu,
  CloseIcon,
  PrincipalBox,
  FinishBuy,
} from "./CartButton.style";

interface CartMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartMenu: React.FC<CartMenuProps> = ({ isOpen, onClose }) => {
  return (
    <StyledCartMenu isOpen={isOpen}>
      <PrincipalBox>
        <TitleCartMenu>Carrinho</TitleCartMenu>
        <CloseIcon onClick={onClose}>X</CloseIcon>
      </PrincipalBox>

     <FinishBuy>Finalizar Compra</FinishBuy>
    </StyledCartMenu>
  );
};

export default CartMenu;
