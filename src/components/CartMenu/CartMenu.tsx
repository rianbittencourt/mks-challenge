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
} from "./CartMenu.style";
import CartItem from "../ProductCardCart/ProductCardCart";
import { useCartStore } from "@/store/cartStore";

export const TotalCount = styled.div`
  margin-top: auto;
  padding: 0px 40px;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: white;
  font-weight: 800;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

interface CartMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartMenu: React.FC<CartMenuProps> = ({ isOpen, onClose }) => {
  const { cart } = useCartStore();

  const calculateTotal = (): number => {
    return cart.reduce((total, item) => {
      const count = item.count || 1;
      const price =
        typeof item.price === "string" ? parseFloat(item.price) : item.price;
      const subtotal = price * count;
      return total + subtotal;
    }, 0);
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
  };


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

      <TotalCount>
      <p>Total:</p> <p>{formatCurrency(calculateTotal())}</p>
      </TotalCount>
      <FinishBuy>Finalizar Compra</FinishBuy>
    </StyledCartMenu>
  );
};

export default CartMenu;
