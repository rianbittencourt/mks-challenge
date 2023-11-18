import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Header component", () => {
  test("Renderiza a logo e o botão corretamente", () => {
    render(<Header />);

    const logoPrincipalText = screen.getByText(/MKS/i);
    const logoSecondaryText = screen.getByText(/Sistemas/i);

    expect(logoPrincipalText).toBeInTheDocument();
    expect(logoSecondaryText).toBeInTheDocument();

    const cartButton = screen.getByText("🛒");
    expect(cartButton).toBeInTheDocument();
  });
});
