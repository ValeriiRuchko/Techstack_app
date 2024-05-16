import { FormEventHandler, useState } from "react";
import DirectionContainer from "./components-styled/DirectionContainer.styled";
import InputStyled from "./components-styled/Input.styled";
import Button from "./Button";
import TextareaStyled from "./components-styled/Textarea.styled";
import type { Apartment } from "../@types/common_types";
// validation lib
import * as v from "valibot";

type FormProps = {
  updatePage: () => Promise<void>;
};

export default function Form(props: FormProps) {
  const [name, setName] = useState("");
  const [rooms, setRooms] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const newApartment: Apartment = {
      name,
      rooms: parseInt(rooms),
      price: parseFloat(price),
      description,
    };
    // valibot validation schema
    const FormSchema = v.object({
      name: v.string([
        v.minLength(1, "Name can't be empty"),
        v.maxLength(99, "Name has to consist of <= 99 chars"),
      ]),
      rooms: v.number("Rooms must be a number \n", [
        v.minValue(1, "Rooms have to be > 0"),
      ]),
      price: v.number("Price must be a number \n", [
        v.minValue(1, "Price has to be > 0"),
      ]),
      description: v.string([
        v.maxLength(999, "Description has to consist of <= 999 chars"),
      ]),
    });
    // applying validation according to schema
    const res = v.safeParse(FormSchema, newApartment);
    if (res.success) {
      const apartment = res.output;

      try {
        const res = await fetch("http://localhost:3002/apartments", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(apartment),
        });

        const data: { msg: string; data: Apartment } = await res.json();
        props.updatePage();

        setName("");
        setRooms("");
        setPrice("");
        setDescription("");
        console.log(data);
      } catch (err: unknown) {
        console.log("Error creating an apartment occured");
      }
    } else {
      for (let val of res.issues) {
        alert(val.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <DirectionContainer
        $width="40vw"
        $height="100%"
        $border="3px solid #e07a5f"
        $vertical={true}
        style={{ padding: "1% 2%" }}
        $gap="10px 0"
      >
        <h1>Apartment creation:</h1>

        <DirectionContainer
          $width="100%"
          $height="5rem"
          $vertical={true}
          $gap="5px 0"
        >
          <label htmlFor="name">Name:</label>
          <InputStyled
            $width="100%"
            $height="1.5rem"
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Apartment's name"
            required
          ></InputStyled>
        </DirectionContainer>

        <DirectionContainer
          $width="100%"
          $height="4rem"
          style={{ justifyContent: "space-between" }}
        >
          <DirectionContainer $vertical={true} $gap="5px 0">
            <label htmlFor="rooms">Rooms count:</label>
            <InputStyled
              $width="15rem"
              $height="1.5rem"
              type="text"
              name="rooms"
              value={rooms}
              onChange={(e) => {
                setRooms(e.target.value);
              }}
              placeholder="Number of rooms"
              required
            ></InputStyled>
          </DirectionContainer>
          <DirectionContainer $vertical={true} $gap="5px 0">
            <label htmlFor="price">Price:</label>
            <InputStyled
              $width="15rem"
              $height="1.5rem"
              type="text"
              name="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              placeholder="Apartment's price"
              required
            ></InputStyled>
          </DirectionContainer>
        </DirectionContainer>

        <DirectionContainer $vertical={true} $gap="5px 0">
          <label htmlFor="description">Description:</label>
          <TextareaStyled
            rows={8}
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="Description of apartment (optional)"
          ></TextareaStyled>
        </DirectionContainer>
        <Button type="submit" text="Create" />
      </DirectionContainer>
    </form>
  );
}
