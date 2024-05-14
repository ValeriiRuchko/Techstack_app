import styled from "styled-components";

const DirectionContainer = styled.div<{
  $vertical?: boolean;
  $width: string;
  $height: string;
}>`
  display: flex;
  flex-direction: ${(props) => (props.$vertical ? "column" : "row")};
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
`;

export default DirectionContainer;
