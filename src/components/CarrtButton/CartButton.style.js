
import styled from "styled-components";

export const CartButtonContainer = styled.div`
  position: relative;
`;

export const CartButton = styled.div`
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

export const CountItems = styled.p`
  color: black;
  font-weight: bold;
`;

export const CartIcon = styled.div`
  font-size: 1.2rem;
  margin-right: 10px;
`;

export const CartMenu = styled.aside`
  position: fixed;
  top: 0;
  right: ${(props) =>
    props.isOpen
      ? "0"
      : "-101%"};
  height: 100%;
  width: 25%;
  background: #0f52ba;
  padding: 10px;

  border-radius: 5px;
  transition: right 0.5s;
  z-index: 99;
`;

export const MenuItem = styled.div`
  padding: 5px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;