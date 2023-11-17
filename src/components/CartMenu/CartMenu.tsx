
import styled from "styled-components";
import React from "react";
import {
  StyledCartMenu,
  MenuItem,
  TitleCartMenu,
  CloseIcon,
  PrincipalBox,
  FinishBuy,
  ContainerMain,
  StyledIconWrapper,
  StyledIcon,
  TextCartEmpty,
  BoxEmptyCart
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
      <ContainerMain>

        <BoxEmptyCart>
        <StyledIconWrapper>
          <StyledIcon />
        </StyledIconWrapper>
        <TextCartEmpty>Seu carrinho está vazio</TextCartEmpty>
        </BoxEmptyCart>
      </ContainerMain>

      <FinishBuy>Finalizar Compra</FinishBuy>
    </StyledCartMenu>
  );
};

export default CartMenu;
