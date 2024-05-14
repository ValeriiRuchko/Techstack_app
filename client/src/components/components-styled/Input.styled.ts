import styled from "styled-components";

const InputStyled = styled.input<{
  $width: string;
  $height: string;
}>`
  border-radius: 5px;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
`;

export default InputStyled;
