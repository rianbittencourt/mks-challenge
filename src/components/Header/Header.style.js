import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: #0f52ba;
  color: #fff;
  padding: 1rem;
`;

export const LogoContainer = styled.header`
  display: flex;

  align-items: center;
`;

export const LogoPrincipalText = styled.div`
  font-size: 4rem;
  font-weight: bold;
`;

export const LogoSecondaryText = styled.div`
  font-size: 2rem;
  font-weight: lighter;
  margin-top: 1rem;
  margin-left: 20px;
`;

export const HeaderBox = styled.div`
  max-width: 80rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CartIcon = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
`;