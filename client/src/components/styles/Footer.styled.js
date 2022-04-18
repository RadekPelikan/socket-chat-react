import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: ${({theme}) => theme.bgColors.footer};
  color: ${({ theme }) => theme.colors.footer};
  padding: 100px 0 60px;

  ul {
    list-style-type: none;
  }

  ul li {
    margin-bottom: 20px;
  }

  p {
    text-align: right;
  }

  @media (max-width: ${({theme}) => theme.resp.mobile}) {
    text-align: center;
    ul {
      padding: 0;
    }
    
    p {
      text-align: center;
    }
  }
`;