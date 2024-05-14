import styled, { css } from "styled-components";

const Button = styled.button<{ $primary?: boolean }>`
  background: white;
  border-radius: 3px;
  border: 2px solid #81b29a;
  color: #81b29a;
  padding: 0.25em 1em;
  width: 10rem;
  height: 1.5rem;

  &:hover {
    background: #81b29a;
    color: white;
  }

  ${(props) =>
    props.$primary &&
    css`
      background: #81b29a;
      color: white;

      &:hover {
        background: white;
        color: #81b29a;
      }
    `};
`;

export default Button;
