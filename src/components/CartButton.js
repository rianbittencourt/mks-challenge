import React, { useState } from "react";
import styled from "styled-components";

const CartButtonContainer = styled.div`
  position: relative;
`;

const CartButton = styled.div`
  background: white;
  padding: 10px 20px;
  display: flex;
  border-radius: 8px;
  align-items: center;
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    background-color: orange;
  }
`;

const CountItems = styled.p`
  color: black;
  font-weight: bold;
`;

const CartIcon = styled.div`
  font-size: 1.2rem;
  margin-right: 10px;
`;

const CartMenu = styled.aside`
  position: fixed;
  top: 0;
  right: ${(props) =>
    props.isOpen
      ? "0"
      : "-500px"}; /* Ajuste a largura do menu conforme necessário */
  height: 100%;
  width: 25%; /* Ajuste a largura do menu conforme necessário */
  background: #0f52ba;
  padding: 10px;
  border-left: 10px solid gray;
  border-radius: 5px;
  transition: right 0.5s;
  z-index: 99;
`;

const MenuItem = styled.div`
  padding: 5px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const CardButton = () => {
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
      <CartMenu isOpen={menuOpen}>
        <MenuItem onClick={toggleMenu}>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>

      </CartMenu>
    </CartButtonContainer>
  );
};

export default CardButton;
