import styled, { css } from "styled-components";

const ButtonStyled = styled.button<{ $primary?: boolean }>`
  border-radius: 3px;
  border: 2px solid #81b29a;
  padding: 0.25em 1em;
  width: 10rem;
  height: 1.5rem;

  color: ${(props) => (props.$primary ? "white" : "#81b29a")};
  background: ${(props) => (props.$primary ? "#81b29a" : "white")};

  &:hover {
    background: #81b29a;
    color: white;
  }

  ${(props) =>
    props.$primary &&
    css`
      &:hover {
        background: white;
        color: #81b29a;
      }
    `};
`;

export default ButtonStyled;
