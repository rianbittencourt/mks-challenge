import React from "react";
import { useCartStore } from "@/store/cartStore";
import {
  Container,
  StyledIcon,
  ProductImage,
  ItemName,
  ItemCount,
  ItemPrice,
  ButtonContainer,
  IncrementButton,
  DecrementButton,
} from "./ProductCardCart.style";

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number | string;
    description: string;
    photo: string;
    count?: number;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeFromCart, increaseCount, decreaseCount } = useCartStore();

  const totalPrice = Number(item.price) * (item.count || 0);

  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
  };

  return (
    <Container>
      <StyledIcon onClick={() => removeFromCart(item.id)}></StyledIcon>
      <ProductImage src={item!.photo} alt={item!.name} />
      <ItemName>{item.name}</ItemName>

      <ButtonContainer>
        <DecrementButton onClick={() => decreaseCount(item.id)}>
          -
        </DecrementButton>
        <ItemCount>{item.count}</ItemCount>
        <IncrementButton onClick={() => increaseCount(item.id)}>
          +
        </IncrementButton>
      </ButtonContainer>

      <ItemPrice>{formatCurrency(Number(totalPrice))}</ItemPrice>
    </Container>
  );
};

export default CartItem;
