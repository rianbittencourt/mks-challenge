// CartMenu.tsx
import React from "react";
import {  StyledCartMenu, MenuItem } from "./CartButton.style";

interface CartMenuProps {
  isOpen: boolean;
  onClose: () => void;
}


const CartMenu: React.FC<CartMenuProps> = ({ isOpen, onClose }) => {
  return (
    <StyledCartMenu isOpen={isOpen}>
      <MenuItem onClick={onClose}>Item 1</MenuItem>
      <MenuItem>Item 2</MenuItem>
    </StyledCartMenu>
  );
};

export default CartMenu;
