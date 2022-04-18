import styled from "styled-components";

export const Form = styled.form`
  background-color: inherit;
  color: ${({ theme }) => theme.colors.body};

  * {
    margin-right: 10px;
  }

  input {
    background-color: inherit;
    color: inherit;
    border: none;
    outline: none;
    margin-bottom: -2px;
    border-bottom: 2px solid ${({ theme }) => theme.bgColors.footer};

    &[type="submit"] {
      padding: 10px;
      background-color: ${({ theme }) => theme.bgColors.footer};
    }
  }
`;

export const Input = styled.input`
  background-color: inherit;
  color: ${({ theme }) => theme.colors.body};
  border: none;
  outline: none;
  margin-bottom: -2px;
  border-bottom: 2px solid ${({ theme }) => theme.bgColors.footer};
`;
