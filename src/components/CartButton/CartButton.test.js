import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardButton from "./CartButton";
import { useCartStore } from "@/store/cartStore";

jest.mock("@/store/cartStore", () => ({
  useCartStore: jest.fn().mockReturnValue({ cart: [] }),
}));

describe("CardButton component", () => {
  it("renders CountItems with the correct quantity", () => {
    const mockCart = [
      { id: 1, name: "Product 1", price: 10, description: "", photo: "" },
      { id: 2, name: "Product 2", price: 15, description: "", photo: "" },
    ];

    useCartStore.mockReturnValue({ cart: mockCart });

    render(<CardButton toggleMenu={() => {}} />);

    const countItems = screen.getByTestId("count-items");

    expect(countItems).toBeInTheDocument();
    expect(countItems.textContent).toEqual(mockCart.length.toString());
  });

  it("Chamando a função ToggleMenu ao clicar no botão", () => {
    const toggleMenuMock = jest.fn();

    render(<CardButton menuIsOpen={false} toggleMenu={toggleMenuMock} />);

    const cartButton = screen.getByText("🛒");
    fireEvent.click(cartButton);

    expect(toggleMenuMock).toHaveBeenCalled();
  });
});
