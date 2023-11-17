import React from "react";
import { useCartStore } from "@/store/cartStore";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: white;

  border-radius: 8px;
  margin-bottom: 1rem;
`;

const ProductImage = styled.img`
  height: 6rem;

  padding: 10px 10px;
  @media (max-width: 768px) {
    height: 5rem;
  }
  @media (max-width: 375px) {
    height: 3rem;
  }
`;

const ItemName = styled.h2`
  font-weight: 300;
  font-size: 1.1rem;
  padding-right: 0.5rem;
  color: #2c2c2c;
  max-width: 25%;
  min-width: 25%;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  border: 1px #ddd solid;
  text-align: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 8px;
`;

const IncrementButton = styled.button`
  background-color: #fff;
  border: none;
  border-left: 1px solid #ddd;


  padding: 5px 10px;

  cursor: pointer;

  &:hover {
    color: #0f52ba;
  }
`;

const DecrementButton = styled.button`
  background-color: #fff;
  border: none;
  border-right: 1px solid #ddd;

  
  padding: 5px 10px;

  cursor: pointer;
  &:hover {
    color: #0f52ba;
  }
`;

const ItemCount = styled.p`
  font-weight: 800;
  font-size: 0.7rem;
  padding: 0.5rem;

  color: #2c2c2c;
`;

const ItemPrice = styled.p`
  font-weight: 300;
  font-size: 1.1rem;
  padding-right: 1rem;
  margin-left: auto;
  font-weight: 800;
  color: #2c2c2c;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

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
