import styled from "styled-components";
import { IoCloseCircleSharp } from "react-icons/io5";

export const StyledIcon = styled(IoCloseCircleSharp)`
  position: absolute;
  right: -10px;
  top: -10px;
  color: black;

  
  font-size: 2rem;
  cursor: pointer;
  @media (max-width: 375px) {
    font-size: 1.5rem;
    right: -5px;
    top: -5px;
  }

  &:hover {
    color: red;
    transition: 0.2s;
  }
`;
export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: white;

  border-radius: 8px;
  margin-bottom: 1rem;
`;

export const ProductImage = styled.img`
  height: 6rem;

  padding: 10px 10px;
  @media (max-width: 768px) {
    height: 5rem;
  }
  @media (max-width: 375px) {
    height: 3rem;
  }
`;

export const ItemName = styled.h2`
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

export const ButtonContainer = styled.div`
  display: flex;
  border: 1px #ddd solid;
  text-align: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 8px;
`;

export const IncrementButton = styled.button`
  background-color: #fff;
  border: none;
  border-left: 1px solid #ddd;

  padding: 5px 10px;

  cursor: pointer;

  &:hover {
    color: #0f52ba;
  }
`;

export const DecrementButton = styled.button`
  background-color: #fff;
  border: none;
  border-right: 1px solid #ddd;

  padding: 5px 10px;

  cursor: pointer;
  &:hover {
    color: #0f52ba;
  }
`;

export const ItemCount = styled.p`
  font-weight: 800;
  font-size: 0.7rem;
  padding: 0.5rem;

  color: #2c2c2c;
`;

export const ItemPrice = styled.p`
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
