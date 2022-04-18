import styled from "styled-components"; // imsc

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.bgColors.header};
  padding: 40px 0;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.header};

  @media (max-width: ${({ theme }) => theme.resp.mobile}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  max-height: 120px;
  @media (max-width: ${({ theme }) => theme.resp.mobile}) {
    margin-bottom: 40px;
  }
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.resp.mobile}) {
    margin-top: 40px 0 30px;
  }
`;
