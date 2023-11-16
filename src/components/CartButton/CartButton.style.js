
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

