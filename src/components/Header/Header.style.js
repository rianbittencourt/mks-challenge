import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: #0f52ba;
  color: #fff;
  padding: 1rem;
`;

export const LogoContainer = styled.header`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: inline;
  }
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
  @media (max-width: 768px) {
    margin-top: 0px;
    margin-left: 0px;
  }
`;

export const HeaderBox = styled.div`
  max-width: 100rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;
