import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductCard from "@/components/ProductCard/ProductCard";

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

  expect(screen.getByAltText(mockProduct.name)).toBeInTheDocument();
  expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
  expect(screen.getByText(/R\$ ?20/)).toBeInTheDocument();
  expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
  expect(screen.getByText("COMPRAR")).toBeInTheDocument();
});

test("renderiza o esqueleto corretamente durante o carregamento", async () => {
  render(<ProductCard product={null} />);

  await waitFor(() => {
    expect(screen.getByTestId("skeleton-image")).toBeInTheDocument();
    expect(
      document.querySelector("span.react-loading-skeleton")
    ).toBeInTheDocument();
  });

  expect(screen.queryByText("COMPRAR")).not.toBeInTheDocument();
});
