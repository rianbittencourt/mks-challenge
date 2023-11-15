import React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";


interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
}

interface ProductCardProps {
  product: Product | null;
}

const CardContainer = styled.div`
  position: relative;
  width: 250px;
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const SkeletonContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: #ddd; /* Cor de fundo para o esqueleto */
  border-radius: 4px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

const NameAndPriceContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const ProductName = styled.h2`
  margin-top: 8px;
  font-family: Montserrat;
  font-weight: lighter;
  font-size: 1.2rem;
  color: #2c2c2c;
`;

const CurrentPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductPrice = styled.p`
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

const ProductDescription = styled.p`
  padding-top: 10px;
  padding-bottom: 40px;
  font-family: Montserrat;
  color: #555;
`;

const BuyButton = styled.button`
  background-color: #0f52ba;
  color: #fff;
  padding: 8px;
  border: none;
  font-weight: bold;
  font-family: Montserrat;
  cursor: pointer;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
`;

const formatCurrency = (value: number) => {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const isLoading = !product;

  return (
    <CardContainer>
      {isLoading ? (
        <SkeletonContainer data-testid="skeleton-image" />
      ) : (
        <ProductImage src={product!.photo} alt={product!.name} />
      )}
      <NameAndPriceContainer>
        {isLoading ? (
          <Skeleton
            count={2}
            height={20}
            width={100}
            data-testid="skeleton-name"
          />
        ) : (
          <ProductName>{product!.name}</ProductName>
        )}
        <CurrentPriceContainer>
          {isLoading ? (
            <Skeleton
              count={1}
              height={20}
              width={100}
              data-testid="skeleton-price"
            />
          ) : (
            <ProductPrice>
              {formatCurrency(Number(product!.price))}
            </ProductPrice>
          )}
        </CurrentPriceContainer>
      </NameAndPriceContainer>
      {isLoading ? (
        <Skeleton count={3} data-testid="skeleton-description" />
      ) : (
        <ProductDescription>{product!.description}</ProductDescription>
      )}
      {!isLoading && <BuyButton>COMPRAR</BuyButton>}
    </CardContainer>
  );
};

export default ProductCard;
