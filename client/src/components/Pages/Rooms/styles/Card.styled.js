import styled from "styled-components";

export const CardContainer = styled.div`
  margin-top: 30px;
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: ${({ theme }) => theme.resp.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.bgColors.footer};
  border-radius: 10px;
  box-shadow: 2px 2px 5px;
  transition: all 0.1s;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h4,
  p {
    margin: 0;
  }
  &:hover {
    transform: scale(97%);
  }
`;

export const CardDesc = styled.p`
  font-size: 0.7em;
`;
