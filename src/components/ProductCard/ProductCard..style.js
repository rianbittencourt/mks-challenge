import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  background:white;
  width: 250px;
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const SkeletonContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: #ddd; /* Cor de fundo para o esqueleto */
  border-radius: 4px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

export const NameAndPriceContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const ProductName = styled.h2`
  margin-top: 8px;
  font-family: Montserrat;
  font-weight: lighter;
  font-size: 1.2rem;
  padding-right: 0.5rem;

  color: #2c2c2c;
`;

export const CurrentPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  margin: 8px 0;
  color: white;
  font-size: 1.2rem;
  background-color: #373737;
  border-radius: 0.5rem;
  padding: 10px;
  text-align: center;
  flex-shrink: 0;
`;

export const ProductDescription = styled.p`
  padding-top: 10px;
  padding-bottom: 40px;
  font-family: Montserrat;
  color: #555;
`;

export const BuyButton = styled.button`
  background-color: #0f52ba;
  color: #fff;
  padding: 1rem;
  border: none;
  font-weight: bold;
  font-family: Montserrat;
  cursor: pointer;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  &:hover {
    transition: 0.5s;
    background-color: #073d6e; // Cor diferente quando o mouse está sobre o botão
  }
`;
