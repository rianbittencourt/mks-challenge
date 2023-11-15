import React from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  CardContainer,
  SkeletonContainer,
  NameAndPriceContainer,
  ProductName,
  ProductDescription,
  ProductImage,
  ProductPrice,
  CurrentPriceContainer,
  BuyButton,
} from "./ProductCard..style";

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
