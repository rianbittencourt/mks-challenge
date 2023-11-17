import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 250px;


  border: 1px solid #ccc;
  margin: 16px;
  border-radius: 8px;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const SkeletonContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: #ddd;
  border-radius: 4px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: contain;

`;

export const CardContentContainer = styled.div`
  padding: 10px;
`;

export const NameAndPriceContainer = styled.div`
 
  display: flex;
  justify-content: space-between;
`;

export const ProductName = styled.h2`
 
  font-family: Montserrat;
  font-weight: lighter;
  font-size: 1.1rem;
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
 
  color: white;
  font-size: 1rem;
  background-color: #373737;
  border-radius: 0.5rem;
  padding: 0.5rem;
  text-align: center;
  flex-shrink: 0;
`;

export const ProductDescription = styled.p`
  margin-top: 10px;
  font-size: 0.8rem;
  color:  #2C2C2C;
  font-weight: 300;

;
`;

export const ButtonContainer = styled.div`
  margin-top: auto; 

`;

export const BuyButton = styled.button`
  background-color: #0f52ba;
  width: 100%;
  color: #fff;
  padding: 0.5rem;
  border: none;
  font-weight: bold;
  border: 2px #0f52ba solid;
  border-radius: 0px 0px 8px 8px;
  cursor: pointer;

  &:hover {
    transition: 0.5s;
    background-color: transparent;
    color: #0f52ba;
    border: 2px #0f52ba solid;
  }
`;