import styled from "styled-components";

export const Loader = styled.div`
margin: 1em auto;
  border: 16px solid ${({theme}) => theme.colors.header};
  border-radius: 50%;
  border-top: 16px solid ${({theme}) => theme.bgColors.footer};
  width: 80px;
  height: 80px;
  animation: spin 2s infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
