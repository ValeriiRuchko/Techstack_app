import { ComponentProps } from "react";
import ButtonStyled from "./components-styled/Button.styled";

interface CustomButtonProps extends ComponentProps<"button"> {
  text: string;
  $primary?: boolean;
}

export default function Button(props: CustomButtonProps) {
  return (
    <ButtonStyled
      type={props.type}
      $primary={props.$primary}
      onClick={props.onClick}
    >
      {props.text}
    </ButtonStyled>
  );
}
