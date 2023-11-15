// components/Header.js
import React from "react";
import styled from "styled-components";

const CartButton = styled.div`
  background: white;
  padding: 20px;
  display: flex;
  border-radius: 20px;
  align-items: center;
`;

const CountItems = styled.p`
  color: black;
  font-weight: bold;
`;

const CartIcon = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
  margin-right: 10px;
`;

const CardButton = () => {
  return (
    <CartButton>
      <CartIcon>🛒</CartIcon>
      <CountItems>0</CountItems>
    </CartButton>
  );
};

export default CardButton;
