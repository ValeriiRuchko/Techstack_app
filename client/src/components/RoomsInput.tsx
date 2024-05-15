import {
  ChangeEventHandler,
  Dispatch,
  FormEventHandler,
  SetStateAction,
  useState,
} from "react";
import { RoomsFilter } from "../@types/common_types";
import InputStyled from "./components-styled/Input.styled";
import DirectionContainer from "./components-styled/DirectionContainer.styled";
// validation lib
import * as v from "valibot";

type SortByRoomsInput = {
  setValue: Dispatch<SetStateAction<RoomsFilter>>;
};

export default function SortByRoomsInput(props: SortByRoomsInput) {
  const [currRooms, setCurrRooms] = useState<string>("");

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCurrRooms(e.currentTarget.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (currRooms === "") {
      props.setValue("");
      return;
    }

    const sort_rooms_schema = v.number(
      "Rooms' sorting value has to be a number and > 0",
    );

    const res = v.safeParse(sort_rooms_schema, parseInt(currRooms));
    if (res.success) {
      props.setValue(`rooms=${res.output}`);
    } else {
      for (let val of res.issues) {
        alert(val.message);
      }
      props.setValue("");
    }
  };
  return (
    <DirectionContainer>
      <form onSubmit={handleSubmit}>
        <InputStyled
          type="number"
          name="rooms-sort"
          onChange={handleInputChange}
          value={currRooms}
          $width="15rem"
          $height="1.5rem"
          placeholder="Enter integer num of rooms"
        ></InputStyled>
      </form>
    </DirectionContainer>
  );
}
