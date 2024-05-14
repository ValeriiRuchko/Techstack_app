import { ReactEventHandler } from "react";
import ButtonStyled from "./components-styled/Button.styled";

type ButtonProps = {
  onClick: ReactEventHandler<HTMLButtonElement>;
  text: string;
  $primary?: boolean;
};

export default function Button(props: ButtonProps) {
  return (
    <ButtonStyled $primary={props.$primary} onClick={props.onClick}>
      {props.text}
    </ButtonStyled>
  );
}
