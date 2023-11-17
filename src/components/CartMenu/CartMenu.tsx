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
  BoxEmptyCart,
  BoxItemsCart,
} from "./CartButton.style";
import CartItem from "../ProductCardCart/ProductCardCart";
import { useCartStore } from "@/store/cartStore";

interface CartMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartMenu: React.FC<CartMenuProps> = ({ isOpen, onClose }) => {
  const { cart } = useCartStore();

  return (
    <StyledCartMenu isOpen={isOpen}>
      <PrincipalBox>
        <TitleCartMenu>Carrinho</TitleCartMenu>
        <CloseIcon onClick={onClose}>X</CloseIcon>
      </PrincipalBox>
      <ContainerMain>
        {cart.length === 0 ? (
          <BoxEmptyCart>
            <StyledIconWrapper>
              <StyledIcon />
            </StyledIconWrapper>
            <TextCartEmpty>Seu carrinho está vazio</TextCartEmpty>
          </BoxEmptyCart>
        ) : (
          <BoxItemsCart>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </BoxItemsCart>
        )}
      </ContainerMain>

      <FinishBuy>Finalizar Compra</FinishBuy>
    </StyledCartMenu>
  );
};

export default CartMenu;
