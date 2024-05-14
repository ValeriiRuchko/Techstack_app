import styled from "styled-components";

const DirectionContainer = styled.div<{
  $vertical?: boolean;
  $width?: string;
  $height?: string;
  $gap?: string;
  $border?: string;
}>`
  display: flex;
  flex-direction: ${(props) => (props.$vertical ? "column" : "row")};
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  gap: ${(props) => props.$gap || 0};
  justify-content: center;
  border: ${(props) => props.$border};
  border-radius: 10px;
`;

export default DirectionContainer;
