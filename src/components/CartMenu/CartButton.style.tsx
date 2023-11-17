import { FaCartShopping } from "react-icons/fa6";

import styled from "styled-components";

interface StyledCartMenuProps {
  isOpen: boolean;
}

export const StyledCartMenu = styled.aside<StyledCartMenuProps>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? "0" : "-101%")};
  height: 100%;
  width: 40rem;
  background: #0f52ba;

  border-radius: 5px;
  transition: right 0.5s;
  z-index: 99;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const PrincipalBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const TitleCartMenu = styled.h1`
  color: white;
  font-size: 2.5rem;
`;

export const CloseIcon = styled.div`
  border-radius: 100%;

  cursor: pointer;
`;

export const ContainerMain = styled.div`

 

 padding: 10px;
  justify-content: center; 


`;

export const BoxEmptyCart = styled.div`
  flex-direction: column;
  display: flex;
  text-align: center;
  align-items: center;
  align-self: center;
`;

export const BoxItemsCart = styled.div`
  flex-direction: column;
  display: flex;
  margin-bottom: 10px;
 
 
 
`;


export const FinishBuy = styled.div`
  position: absolute;
  bottom: 0;
  background-color: black;
  width: 100%;
  padding: 20px;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  cursor: pointer;
  &:hover {
    transition: 0.2s;
    background-color: orange;
    color: black;
  }
`;

export const MenuItem = styled.div`
  padding: 5px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 50%;
`;

export const StyledIcon = styled(FaCartShopping)`
  color: orange;
  font-size: 5rem;
`;

export const TextCartEmpty = styled.h2`
  font-size: 1.5rem;
  color: orange;
`;

