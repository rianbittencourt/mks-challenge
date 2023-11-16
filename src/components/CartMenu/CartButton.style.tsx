// CartMenu.tsx
import styled from "styled-components";

interface StyledCartMenuProps {
  isOpen: boolean;
}

export const StyledCartMenu =
  styled.aside <
  StyledCartMenuProps >
  `
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? "0" : "-101%")};
  height: 100%;
  width: 25%;
  background: #0f52ba;
  padding: 10px;
  border-radius: 5px;
  transition: right 0.5s;
  z-index: 99;
  @media (max-width: 768px) {
    width: 75%;
  }
`;

export const MenuItem = styled.div`
  padding: 5px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
