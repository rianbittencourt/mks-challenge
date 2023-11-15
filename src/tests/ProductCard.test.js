import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductCard from "@/components/ProductCard";

const mockProduct = {
  id: 1,
  name: "Test Product",
  brand: "Test Brand",
  description: "Test Description",
  photo: "test.jpg",
  price: "20.00",
};

test("renderiza o ProductCard corretamente", () => {
  render(<ProductCard product={mockProduct} />);

  // Verifica se os elementos do produto são renderizados corretamente
  expect(screen.getByAltText(mockProduct.name)).toBeInTheDocument();
  expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
  expect(screen.getByText(/R\$ ?20/)).toBeInTheDocument();
  expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
  expect(screen.getByText("COMPRAR")).toBeInTheDocument();
});

test("renderiza o esqueleto corretamente durante o carregamento", () => {
  render(<ProductCard product={null} />);

  // Verifica se os elementos de esqueleto são renderizados corretamente durante o carregamento
  expect(screen.getByTestId("skeleton-image")).toBeInTheDocument();
  expect(screen.getByTestId("skeleton-name")).toHaveClass(
    "react-loading-skeleton"
  );

  expect(screen.getByTestId("skeleton-price")).toBeInTheDocument();
  expect(screen.getByTestId("skeleton-description")).toBeInTheDocument();
  expect(screen.queryByText("COMPRAR")).not.toBeInTheDocument(); // Verifica que o botão de compra não está presente durante o carregamento
});
